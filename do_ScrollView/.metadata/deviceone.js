(function (mod) {
    if (typeof exports == "object" && typeof module == "object") {
        return mod(require.main.require("../lib/infer"), require.main.require("../lib/tern"), require);
    }
    if (typeof define == "function" && define.amd)
        return define(["tern/lib/infer", "tern/lib/tern"], mod);
    mod(tern, tern);
})(function (infer, tern, require) {
    "use strict";
    function ResolvePath(base, path) {
        if (path[0] == "/")
            return path;
        var slash = base.lastIndexOf("/"),
            m;
        if (slash >= 0)
            path = base.slice(0, slash + 1) + path;
        while (m = /[^\/]*[^\/\.][^\/]*\/\.\.\//.exec(path))
            path = path.slice(0, m.index) + path.slice(m.index + m[0].length);
        return path.replace(/(^|[^\.])\.\//g, "$1");
    }

    function StringEndWith(that, str) {
        if (!that || !str || str.length > that.length)
            return false;
        return that.substring(that.length - str.length) == str;
    }

    function RelativePath(from, to) {
        if (from[from.length - 1] != "/")
            from += "/";
        if (to.indexOf(from) == 0)
            return to.slice(from.length);
        else
            return to;
    }

    function GetModule(data, name) {
        return data.modules[name] || (data.modules[name] = new infer.AVal);
    }

    function BuildWrappingScope(parent, origin, node) {
        var scope = new infer.Scope(parent);
        scope.originNode = node;
        infer.cx().definitions.deviceone.require.propagate(scope.defProp("require"));
        var module = new infer.Obj(infer.cx().definitions.deviceone.Module.getProp("prototype").getType());
        module.propagate(scope.defProp("module"));
        var exports = new infer.Obj(true, "exports");
        module.origin = exports.origin = origin;
        module.originNode = exports.originNode = scope.originNode;
        exports.propagate(scope.defProp("exports"));
        var moduleExports = scope.exports = module.defProp("exports");
        exports.propagate(moduleExports, 95);
        return scope;
    }

    function ResolveModule(server, name, _parent) {
        server.addFile(name, null, server._node.currentOrigin);
        return GetModule(server._node, name);
    }

    function BuildUIFileIDMap(obj, r) {
        r = r || {};
        if (obj.RootView) {
            r.$ = obj.RootView.type;
            BuildUIFileIDMap(obj.RootView, r);
        }
        if (obj.id) {
            r[obj.id] = obj.type;
        }
        if (obj.views) {
            var i = 0,
                l = obj.views.length;
            for (; i < l; i++) {
                BuildUIFileIDMap(obj.views[i], r);
            }
        }
        return r;
    }

    function GetScriptJSName(dir, fy, rs) {
        return [];
    }

    /** ******************************************************************************************************************** */
    var DEFINES;
    if (require)
        (function () {
            var fs = require("fs"),
                module_ = require("module"),
                path = require("path");
            RelativePath = path.relative;
            ResolveModule = function (server, name, parent) {
                var data = server._node;
                if (data.options.dontLoad == true || data.options.dontLoad && new RegExp(data.options.dontLoad).test(name) || data.options.load && !new RegExp(data.options.load).test(name))
                    return infer.ANull;
                if (data.modules[name])
                    return data.modules[name];
                var file = server.options.projectDir + "/source/default/script/" + name + ".js";
                var norm = NormPath(file);
                if (data.modules[norm])
                    return data.modules[norm];

                if (fs.existsSync(file) && /^(\.js)?$/.test(path.extname(file)))
                    server.addFile(RelativePath(server.options.projectDir, file), null, data.currentOrigin);
                return data.modules[norm] = new infer.AVal;
            };


            GetScriptJSName = function (dir, fy, rs) {
                rs = rs || [];
                fy = fy || "";
                var list = fs.readdirSync(dir);
                for (var i = 0; i < list.length; i++) {
                    var fx = list[i];
                    var file = dir + '/' + fx;
                    var stat = fs.statSync(file);
                    if (!stat) continue;
                    if (stat.isFile() && file.split(".").pop().toLowerCase() === "js") {
                        rs.push(fy + fx);
                    }
                    if (stat.isDirectory()) {
                        GetScriptJSName(file, fy + fx + "/", rs);
                    }
                }
                return rs;
            };

        })();
    /** ******************************************************************************************************************** */

    function NormPath(name) {
        return name.replace(/\\/g, "/");
    }

    function ResolveProjectPath(server, pth) {
        return ResolvePath(NormPath(server.options.projectDir || "") + "/", NormPath(pth));
    }

    function PreCondenseReach(state) {
        var mods = infer.cx().parent._node.modules;
        var node = state.roots["!node"] = new infer.Obj(null);
        for (var name in mods) {
            var mod = mods[name];
            var id = mod.origin || name;
            var prop = node.defProp(id.replace(/\./g, "`"));
            mod.propagate(prop);
            prop.origin = mod.origin;
        }
    }

    function PostLoadDef(data) {
        var cx = infer.cx(),
            mods = cx.definitions[data["!name"]]["!node"];
        var data = cx.parent._node;
        if (mods)
            for (var name in mods.props) {
                var origin = name.replace(/`/g, ".");
                var mod = GetModule(data, origin);
                mod.origin = origin;
                mods.props[name].propagate(mod);
            }
    }

    function FindTypeAt(file, pos, expr, type) {
        var isStringLiteral = expr.node.type === "Literal" && typeof expr.node.value === "string";
        var isRequireArg = !!expr.node.required;
        if (isStringLiteral && isRequireArg) {
            type = Object.create(type);
            var exportedType = expr.node.required.types[0];
            type.origin = exportedType.origin;
            type.originNode = exportedType.originNode;
        }
        return type;
    }

    function MaybeSet(obj, prop, val) {
        if (val != null)
            obj[prop] = val;
    }

    /** ***************Properties************* */
    function GetObjectProperties(proto) {
        var cx = infer.cx(),
            locals = cx.definitions.deviceone;
        var objectName = proto.name,
            index = objectName.indexOf("UI.");
        if (index == 0)
            objectName = objectName.substring("UI.".length, objectName.length);
        objectName = objectName.substring(0, objectName.indexOf('.'));
        return locals["!pp"].hasProp(objectName);
    }

    function GetPropertyType(widgetType, propertyName) {
        if (!(widgetType))
            return null;
        var proto = widgetType.proto,
            propertyType = null;
        while (proto) {
            var objectType = GetObjectProperties(proto);
            if (objectType && objectType.getType)
                propertyType = objectType.getType().hasProp(propertyName);
            if (propertyType)
                return propertyType;
            proto = proto.proto;
        }
        return null;
    }

    /** ***************Events************* */
    function GetEventProperties(proto) {
        var cx = infer.cx(),
            locals = cx.definitions.deviceone;
        var oname = proto.name;
        if (!oname.indexOf("UI.") || !oname.indexOf("SM.") || !oname.indexOf("MM.")) {
            oname = oname.substring("UI.".length, oname.length);
        }
        oname = oname.substring(0, oname.indexOf('.'));
        return locals["!ee"].hasProp(oname);
    }

    function Completion(file, query) {
        function getQuote(c) {
            return c === "'" || c === '"' ? c : null;
        }

        if (!query.end)
            return;

        var wordPos = tern.resolvePos(file, query.end);
        var word = null,
            completions = [];
        var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;
        var cx = infer.cx(),
            overrideType = null;

        function gather(prop, obj, depth, addInfo) {
            if (obj == cx.protos.Object && !word)
                return;
            if (query.filter !== false && word && (query.caseInsensitive ? prop.toLowerCase() : prop).indexOf(word) !== 0)
                return;
            for (var i = 0; i < completions.length; ++i) {
                var c = completions[i];
                if ((wrapAsObjs ? c.name : c) == prop)
                    return;
            }
            var rec = wrapAsObjs ? {
                name: prop
            }
                : prop;
            completions.push(rec);

            if (obj && (query.types || query.docs || query.urls || query.origins)) {
                var val = obj.props[prop];
                infer.resetGuessing();
                var type = val.getType();
                rec.guess = infer.didGuess();
                if (query.types)
                    rec.type = overrideType != null ? overrideType : infer.toString(type);
                if (query.docs)
                    MaybeSet(rec, "doc", val.doc || type && type.doc);
                if (query.urls)
                    MaybeSet(rec, "url", val.url || type && type.url);
                if (query.origins)
                    MaybeSet(rec, "origin", val.origin || type && type.origin);
            }
            if (query.depths)
                rec.depth = depth;
            if (wrapAsObjs && addInfo)
                addInfo(rec);
        }

        var callExpr = infer.findExpressionAround(file.ast, null, wordPos, file.scope, "CallExpression");
        if (callExpr && callExpr.node.arguments && callExpr.node.arguments.length && callExpr.node.arguments.length > 0) {
            var nodeArg = callExpr.node.arguments[0];
            if (!(nodeArg.start <= wordPos && nodeArg.end >= wordPos))
                return;
            if (nodeArg._do_type) {
                var startQuote = getQuote(nodeArg.raw.charAt(0)),
                    endQuote = getQuote(nodeArg.raw.length > 1 ? nodeArg.raw.charAt(nodeArg.raw.length - 1) : null);
                var wordEnd = endQuote != null ? nodeArg.end - 1 : nodeArg.end,
                    wordStart = startQuote != null ? nodeArg.start + 1 : nodeArg.start,
                    word = nodeArg.value.slice(0,
                        nodeArg.value.length - (wordEnd - wordPos));
                if (query.caseInsensitive)
                    word = word.toLowerCase();

                switch (nodeArg._do_type.type) {
                    case "deviceone_pp":
                        var widgetType = nodeArg._do_type.proxy,
                            proto = widgetType.proto,
                            propertyType = null;
                        while (proto) {
                            var objType = GetObjectProperties(proto);
                            if (objType)
                                infer.forAllPropertiesOf(objType, gather);
                            proto = proto.proto;
                        }
                        break;

                    case "deviceone_ee":
                        var widgetType = nodeArg._do_type.proxy,
                            proto = widgetType.proto,
                            propertyType = null;
                        while (proto) {
                            var objType = GetEventProperties(proto);
                            if (objType)
                                infer.forAllPropertiesOf(objType, gather);
                            proto = proto.proto;
                        }
                        break;
                    case "deviceone_ui":
                        var server = cx.parent;
                        var _uimap = server._node.currentIDMap;
                        for (var k in _uimap) {
                            var _t = {};
                            _t.name = k;
                            _t.type = _uimap[k];
                            completions.push(_t);
                        }
                        break;
                    case "deviceone_sm":
                        var types = cx.definitions.deviceone["SM"];
                        overrideType = "SM";
                        infer.forAllPropertiesOf(types, gather);
                        break;
                    case "deviceone_mm":
                        var types = cx.definitions.deviceone["MM"];
                        overrideType = "MM";
                        infer.forAllPropertiesOf(types, gather);
                        break;
                    case "deviceone_rq":
                    	completions.push({ name : "deviceone", type:"module" });
                        var server = cx.parent;
                        var rs = GetScriptJSName(server.options.projectDir + "/source/default/script/");
                        var _t, _m;
                        for (var i = 0; i < rs.length; i++) {
                            _m = rs[i];
                            _t = {};
                            _t.name = _m.substring(0, _m.lastIndexOf(".js"));
                            _t.type = "module";
                            completions.push(_t);
                        }
                        break;
                }

                return {
                    start: tern.outputPos(query, file, wordStart),
                    end: tern.outputPos(query, file, wordEnd),
                    isProperty: false,
                    isStringAround: true,
                    startQuote: startQuote,
                    endQuote: endQuote,
                    completions: completions
                }
            }
        }
    }

    /** ******************************************************************************************************************** */

    infer.registerFunction("deviceone_ui", function (_self, args, argNodes) {
        if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
            return infer.ANull;
        var name = argNodes[0].value;
        var cx = infer.cx(),
            server = cx.parent;
        name = server._node.currentIDMap[name];
        var locals = cx.definitions.deviceone["UI"],
            dType = locals.hasProp(name);
        argNodes[0]._do_type = {
            "type": "deviceone_ui"
        };
        if (dType)
            return new infer.Obj(dType.getType().getProp("prototype").getType());
        return infer.ANull;
    });

    infer.registerFunction("deviceone_sm", function (_self, args, argNodes) {
        if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
            return infer.ANull;
        var name = argNodes[0].value;
        var cx = infer.cx(),
            server = cx.parent;
        var locals = cx.definitions.deviceone["SM"],
            dType = locals.hasProp(name);
        argNodes[0]._do_type = {
            "type": "deviceone_sm"
        };
        if (dType)
            return new infer.Obj(dType.getType().getProp("prototype").getType());
        return infer.ANull;
    });

    infer.registerFunction("deviceone_mm", function (_self, args, argNodes) {
        if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
            return infer.ANull;
        var name = argNodes[0].value;
        var cx = infer.cx(),
            server = cx.parent;
        var locals = cx.definitions.deviceone["MM"],
            dType = locals.hasProp(name);
        argNodes[0]._do_type = {
            "type": "deviceone_mm"
        };
        if (dType)
            return new infer.Obj(dType.getType().getProp("prototype").getType());
        return infer.ANull;
    });

    infer.registerFunction("deviceone_ee", function (_self, args, argNodes) {
        if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
            return infer.ANull;
        var proxy = _self.getType();
        argNodes[0]._do_type = {
            "type": "deviceone_ee",
            "proxy": proxy
        };
    });

    infer.registerFunction("deviceone_pp", function (_self, args, argNodes) {
        if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
            return infer.ANull;
        var widgetType = _self.getType(),
            propertyName = argNodes[0].value,
            propertyType = GetPropertyType(widgetType, propertyName);
        argNodes[0]._do_type = {
            "type": "deviceone_pp",
            "proxy": widgetType
        };
        if (propertyType)
            return propertyType.getType();
        return infer.ANull;
    });

    infer.registerFunction("deviceone_rq", function (_self, _args, argNodes) {
        if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
            return infer.ANull;
        var cx = infer.cx(),
            server = cx.parent,
            data = server._node,
            name = argNodes[0].value;

        argNodes[0]._do_type = {
            "type": "deviceone_rq",
            "proxy": _self.getType()
        };

        if (name == "deviceone") {
            return new infer.Obj(cx.definitions.deviceone["!$"]);
        }
        var result;
        if (data.options.modules && data.options.modules.hasOwnProperty(name)) {
            var scope = BuildWrappingScope(cx.topScope, name);
            infer.def.load(data.options.modules[name], scope);
            result = data.modules[name] = scope.exports;
        } else {
            var currentFile = data.currentFile || ResolveProjectPath(server, argNodes[0].sourceFile.name);
            var relative = /^\.{0,2}\//.test(name);
            if (relative) {
                if (!currentFile)
                    return argNodes[0].required || infer.ANull;
                name = ResolvePath(currentFile, name);
            }
            result = ResolveModule(server, name, currentFile);
        }
        return argNodes[0].required = result;
    });
    
    infer.registerFunction("deviceone_cs", function(_self, args, argNodes) {
        var cx = infer.cx();
        var Cs = new infer.Obj(null);
        Cs.defProp("fz");
        return Cs;
    });

    tern.registerPlugin("deviceone", function (server, options) {

        server._node = {
            modules: Object.create(null),
            options: options || {},
            currentFile: null,
            currentRequires: [],
            currentOrigin: null,
            server: server
        };

        server.on("beforeLoad", function (file) {
            var fs = require("fs");
            if (StringEndWith(file.name, ".ui.js")) {
                var pathui = (server.options.projectDir + "/" + file.name).replace(".ui.js", ".ui");
                if (fs.existsSync(pathui)) {
                    this._node.currentIDMap = BuildUIFileIDMap(JSON.parse(fs.readFileSync(pathui)));
                }
            }
            this._node.currentFile = ResolveProjectPath(server, file.name);
            this._node.currentOrigin = file.name;
            this._node.currentRequires = [];
            file.scope = BuildWrappingScope(file.scope, this._node.currentOrigin, file.ast);
        });

        server.on("afterLoad", function (file) {
            var mod = GetModule(this._node, this._node.currentFile);
            mod.origin = this._node.currentOrigin;
            file.scope.exports.propagate(mod);
            this._node.currentFile = null;
            this._node.currentOrigin = null;
        });

        server.on("reset", function () {
            this._node.modules = Object.create(null);
        });

        return {
            defs: DEFINES,
            passes: {
                completion: Completion,
                preCondenseReach: PreCondenseReach,
                postLoadDef: PostLoadDef,
                typeAt: FindTypeAt
            }

        };
    });
/**}); **/ 
DEFINES={"mm":{"!type":"deviceone.mm"},"deviceone":{"mm":{"!type":"fn(id: string) -> !custom:deviceone_mm"},"foreach":{"!effects":["call !1 string !0.<i>"],"!type":"fn(obj: ?, f: fn(key: string, value: ?))"},"print":{"!type":"fn(info: string, name?: string)"},"ui":{"!type":"fn(id: string) -> !custom:deviceone_ui"},"merge":{"!effects":["copy !1 !0","copy !2 !0"],"!type":"fn(target: ?, source: ?, source2?: ?) -> !0"},"sm":{"!type":"fn(id: string) -> !custom:deviceone_sm"},"Class":{"!type":"fn(Super: ?, init: fn()) -> !custom:deviceone_cs"},"foreachi":{"!effects":["call !1 number !0.<i>"],"!type":"fn(list: [?], f: fn(index: number, value: ?))"}},"ui":{"!type":"deviceone.ui"},"!name":"deviceone","sm":{"!type":"deviceone.sm"},"!define":{"MM":{"do_Http":{"!type":"fn()","prototype":{"request":{"!type":"fn()"},"download":{"!type":"fn(path: string)"},"method":{"!type":"string"},"upload":{"!type":"fn(path: string, name: string)"},"setRequestHeader":{"!type":"fn(key: string, value: string)"},"!proto":"!MM.prototype","getResponseHeader":{"!type":"fn(key: string) -> string"},"body":{"!type":"string"},"contentType":{"!type":"string"},"timeout":{"!type":"number"},"url":{"!type":"string"}},"!url":""},"do_Animation":{"!type":"fn()","prototype":{"rotate":{"!type":"fn(data: Node, id: string)"},"transfer":{"!type":"fn(data: Node, id: string)"},"alpha":{"!type":"fn(data: Node, id: string)"},"!proto":"!MM.prototype","scale":{"!type":"fn(data: Node, id: string)"},"fillAfter":{"!type":"bool"}},"!url":""}},"!pp":{"do_ExpandableListView":{"isShowbar":{"!type":"bool"},"childTemplate":{"!type":"string"},"groupTemplate":{"!type":"string"},"selectedColor":{"!type":"string"}},"do_ProgressBar":{"progress":{"!type":"number"},"style":{"!type":"string"}},"do_BaiduMapView":{"zoomLevel":{"!type":"number"}},"do_Http":{"method":{"!type":"string"},"body":{"!type":"string"},"contentType":{"!type":"string"},"timeout":{"!type":"number"},"url":{"!type":"string"}},"do_LinearLayout":{"padding":{"!type":"string"},"bgImageFillType":{"!type":"string"},"bgImage":{"!type":"string"},"enabled":{"!type":"bool"},"direction":{"!type":"string"}},"do_WebView":{"isShowLoadingProgress":{"!type":"bool"},"isHeaderVisible":{"!type":"bool"},"zoom":{"!type":"bool"},"headerView":{"!type":"string"},"url":{"!type":"string"}},"do_VerticalSlideView":{"templates":{"!type":"Node"},"index":{"!type":"number"}},"do_ALayout":{"bgImageFillType":{"!type":"string"},"layoutAlign":{"!type":"string"},"bgImage":{"!type":"string"},"isStretch":{"!type":"bool"},"enabled":{"!type":"bool"}},"do_RichLabel":{"maxHeight":{"!type":"number"},"maxLines":{"!type":"number"},"text":{"!type":"string"},"maxWidth":{"!type":"number"}},"do_SegmentView":{"templates":{"!type":"string"},"index":{"!type":"number"}},"do_Animation":{"fillAfter":{"!type":"bool"}},"do_SwitchView":{"shape":{"!type":"string"},"checked":{"!type":"bool"},"colors":{"!type":"string"}},"do_ComboBox":{"textAlign":{"!type":"string"},"index":{"!type":"number"},"fontSize":{"!type":"number"},"fontStyle":{"!type":"string"},"items":{"!type":"string"},"fontColor":{"!type":"string"},"textFlag":{"!type":"string"}}},"!ee":{"do_App":{"loaded":{"!type":"Event"}},"do_HuanXinIM":{"receive":{"!type":"Event"},"chatStatusChanged":{"!type":"Event"},"connection":{"!type":"Event"}},"do_Alipay":{},"do_ExpandableListView":{"groupTouch":{"!type":"Event"},"groupCollapse":{"!type":"Event"},"childTouch":{"!type":"Event"},"groupExpand":{"!type":"Event"}},"do_ProgressBar":{},"do_BaiduMapView":{"touchMarker":{"!type":"Event"}},"do_Http":{"fail":{"!type":"Event"},"success":{"!type":"Event"},"progress":{"!type":"Event"}},"do_TencentQQ":{},"do_Global":{"broadcast":{"!type":"Event"},"background":{"!type":"Event"},"launch":{"!type":"Event"},"foreground":{"!type":"Event"}},"do_BaiduLocation":{"result":{"!type":"Event"}},"do_AssistiveTouch":{"touch":{"!type":"Event"}},"do_SangforVPN":{},"do_LinearLayout":{"touch":{"!type":"Event"}},"do_Storage":{},"do_WebView":{"loaded":{"!type":"Event"},"pull":{"!type":"Event"},"start":{"!type":"Event"},"failed":{"!type":"Event"}},"do_DateTimePicker":{},"do_VerticalSlideView":{"indexChanged":{"!type":"Event"}},"do_ALayout":{"touchDown":{"!type":"Event"},"touchUp":{"!type":"Event"},"longTouch":{"!type":"Event"},"touch":{"!type":"Event"}},"do_RichLabel":{"linkTouch":{"!type":"Event"}},"do_SegmentView":{"indexChanged":{"!type":"Event"}},"do_Page":{"loaded":{"!type":"Event"},"resume":{"!type":"Event"},"result":{"!type":"Event"},"back":{"!type":"Event"},"menu":{"!type":"Event"},"pause":{"!type":"Event"}},"do_Animation":{},"do_SwitchView":{"changed":{"!type":"Event"}},"do_ComboBox":{"selectChanged":{"!type":"Event"}}},"!MM":{"!type":"fn()","prototype":{"loadSync":{"!type":"fn(source: string)"},"load":{"!effects":["call !1 this=!this"],"!type":"fn(source: string, f: fn(data: , e: ?)) -> !this"},"setMapping":{"!type":"fn(data: Node)"},"!proto":"!Q.prototype","refreshData":{"!type":"fn()"},"bindData":{"!type":"fn(data: string, mapping: Node)"}},"!url":""},"!$":"deviceone","!E":{"prototype":{"getType":{"!doc":"","!type":"fn() -> string","!url":""},"fire":{"!effects":["custom deviceone_ee"],"!doc":"","!type":"fn(name: string, data?: Node) -> !this","!url":""},"getAddress":{"!doc":"","!type":"fn() -> string","!url":""},"off":{"!effects":["custom deviceone_ee"],"!doc":"","!type":"fn(name: string) -> !this","!url":""},"on":{"!effects":["custom deviceone_ee","call !3 this=!this"],"!doc":"","!type":"fn(name: string, data: Node, delay: number, f: fn(data: Node, e: Node)) -> !this","!url":""}}},"Node":{},"require":{"!doc":"","!type":"fn(id: string) -> !custom:deviceone_rq","!url":""},"!Q":{"!doc":"","!type":"fn()","prototype":{"set":{"!type":"fn(data: Node) -> !custom:deviceone_pp"},"setMapping":{"!type":"fn(data: Node, mapping: Node) -> !this"},"get":{"!type":"fn(data: [string]) -> !custom:deviceone_pp"},"!proto":"!E.prototype","refreshData":{"!type":"fn() -> !this"},"bindData":{"!type":"fn(data: Node, mapping: Node) -> !this"}},"!url":""},"UI":{"do_LinearLayout":{"!type":"fn()","prototype":{"add":{"!type":"fn(id: string, path: string, target: string) -> string"},"padding":{"!type":"string"},"bgImageFillType":{"!type":"string"},"!proto":"!UI.prototype","bgImage":{"!type":"string"},"enabled":{"!type":"bool"},"direction":{"!type":"string"}},"!url":""},"do_WebView":{"!type":"fn()","prototype":{"isHeaderVisible":{"!type":"bool"},"forward":{"!type":"fn()"},"canForward":{"!type":"fn() -> bool"},"!proto":"!UI.prototype","back":{"!type":"fn()"},"zoom":{"!type":"bool"},"canBack":{"!type":"fn() -> bool"},"headerView":{"!type":"string"},"url":{"!type":"string"},"isShowLoadingProgress":{"!type":"bool"},"rebound":{"!type":"fn()"},"reload":{"!type":"fn()"},"stop":{"!type":"fn()"},"loadString":{"!effects":["call !1 this=!this"],"!type":"fn(text: string, f: fn(data: , e: ?)) -> !this"}},"!url":""},"do_ExpandableListView":{"!type":"fn()","prototype":{"isShowbar":{"!type":"bool"},"childTemplate":{"!type":"string"},"!proto":"!UI.prototype","bindItems":{"!type":"fn(groupData: Node, childData: Node)"},"groupTemplate":{"!type":"string"},"selectedColor":{"!type":"string"},"collapseGroup":{"!type":"fn(indexs: Node)"},"refreshItems":{"!type":"fn()"},"expandGroup":{"!type":"fn(indexs: Node)"}},"!url":""},"do_VerticalSlideView":{"!type":"fn()","prototype":{"templates":{"!type":"Node"},"!proto":"!UI.prototype","bindItems":{"!type":"fn(data: Node)"},"index":{"!type":"number"},"refreshItems":{"!type":"fn()"}},"!url":""},"do_ALayout":{"!type":"fn()","prototype":{"add":{"!type":"fn(id: string, path: string, x: string, y: string) -> string"},"bgImageFillType":{"!type":"string"},"layoutAlign":{"!type":"string"},"!proto":"!UI.prototype","bgImage":{"!type":"string"},"isStretch":{"!type":"bool"},"enabled":{"!type":"bool"}},"!url":""},"do_RichLabel":{"!type":"fn()","prototype":{"maxHeight":{"!type":"number"},"!proto":"!UI.prototype","maxLines":{"!type":"number"},"text":{"!type":"string"},"maxWidth":{"!type":"number"}},"!url":""},"do_ProgressBar":{"!type":"fn()","prototype":{"!proto":"!UI.prototype","progress":{"!type":"number"},"style":{"!type":"string"}},"!url":""},"do_SegmentView":{"!type":"fn()","prototype":{"templates":{"!type":"string"},"!proto":"!UI.prototype","bindItems":{"!type":"fn(data: Node)"},"index":{"!type":"number"},"refreshItems":{"!type":"fn()"}},"!url":""},"do_BaiduMapView":{"!type":"fn()","prototype":{"zoomLevel":{"!type":"number"},"removeAll":{"!type":"fn()"},"removeMarker":{"!type":"fn(ids: Node)"},"setCenter":{"!type":"fn(latitude: string, longitude: string) -> bool"},"!proto":"!UI.prototype","addMarkers":{"!type":"fn(data: Node) -> bool"}},"!url":""},"do_SwitchView":{"!type":"fn()","prototype":{"shape":{"!type":"string"},"!proto":"!UI.prototype","checked":{"!type":"bool"},"colors":{"!type":"string"}},"!url":""},"do_ComboBox":{"!type":"fn()","prototype":{"textAlign":{"!type":"string"},"!proto":"!UI.prototype","index":{"!type":"number"},"fontSize":{"!type":"number"},"fontStyle":{"!type":"string"},"items":{"!type":"string"},"fontColor":{"!type":"string"},"textFlag":{"!type":"string"}},"!url":""}},"!UI":{"!type":"fn()","prototype":{"margin":{"!type":"string"},"visible":{"!type":"bool"},"typeDesc":{"!type":"string"},"setMapping":{"!type":"fn(data: Node)"},"show":{"!type":"fn(animationType: string, animationTime: number)"},"!proto":"!Q.prototype","type":{"!type":"string"},"animate":{"!effects":["call !1 this=!this"],"!type":"fn(animation: string, f: fn(data: , e: ?)) -> !this"},"remove":{"!type":"fn()"},"redraw":{"!type":"fn()"},"hide":{"!type":"fn(animationType: string, animationTime: number)"},"bgColor":{"!type":"string"},"x":{"!type":"number"},"width":{"!type":"string"},"y":{"!type":"number"},"id":{"!type":"string"},"tag":{"!type":"string"},"getRect":{"!type":"fn() -> Node"},"bindData":{"!type":"fn(data: string, mapping: Node)"},"height":{"!type":"string"}},"!url":""},"Event":{},"SM":{"do_App":{"!type":"fn()","prototype":{"openPage":{"!effects":["call !8 this=!this"],"!type":"fn(source: string, data: string, animationType: string, keyboardMode: string, scriptType: string, statusBarState: string, statusBarFgColor: string, id: string, f: fn(data: , e: ?)) -> !this"},"closePageToID":{"!effects":["call !3 this=!this"],"!type":"fn(data: string, animationType: string, id: string, f: fn(data: , e: ?)) -> !this"},"!proto":"!SM.prototype","update":{"!effects":["call !2 this=!this"],"!type":"fn(source: Node, target: string, f: fn(data: bool, e: ?)) -> !this"},"closePage":{"!effects":["call !3 this=!this"],"!type":"fn(data: string, animationType: string, layer: number, f: fn(data: , e: ?)) -> !this"},"getAppID":{"!type":"fn() -> string"}},"!url":""},"do_AssistiveTouch":{"!type":"fn()","prototype":{"hideView":{"!type":"fn()"},"!proto":"!SM.prototype","showView":{"!type":"fn(location: string, image: string, isMove: bool)"}},"!url":""},"do_HuanXinIM":{"!type":"fn()","prototype":{"logout":{"!type":"fn()"},"enterChat":{"!type":"fn(userID: string, userNick: string, userIcon: string, selfNick: string, selfIcon: string, tag: string)"},"!proto":"!SM.prototype","login":{"!effects":["call !2 this=!this"],"!type":"fn(username: string, password: string, f: fn(data: Node, e: ?)) -> !this"}},"!url":""},"do_Alipay":{"!type":"fn()","prototype":{"!proto":"!SM.prototype","pay":{"!effects":["call !10 this=!this"],"!type":"fn(rsaPrivate: string, rsaPublic: string, partner: string, notifyUrl: string, tradeNo: string, subject: string, sellerId: string, totalFee: string, body: string, timeOut: string, f: fn(data: Node, e: ?)) -> !this"}},"!url":""},"do_SangforVPN":{"!type":"fn()","prototype":{"logout":{"!effects":["call !0 this=!this"],"!type":"fn(f: fn(data: Node, e: ?)) -> !this"},"!proto":"!SM.prototype","login":{"!effects":["call !4 this=!this"],"!type":"fn(host: string, username: string, password: string, port: number, f: fn(data: Node, e: ?)) -> !this"}},"!url":""},"do_Storage":{"!type":"fn()","prototype":{"deleteFile":{"!effects":["call !1 this=!this"],"!type":"fn(path: string, f: fn(data: bool, e: ?)) -> !this"},"zip":{"!effects":["call !2 this=!this"],"!type":"fn(source: string, target: string, f: fn(data: bool, e: ?)) -> !this"},"getDirs":{"!effects":["call !1 this=!this"],"!type":"fn(path: string, f: fn(data: Node, e: ?)) -> !this"},"fileExist":{"!type":"fn(path: string) -> bool"},"!proto":"!SM.prototype","unzip":{"!effects":["call !2 this=!this"],"!type":"fn(source: string, target: string, f: fn(data: bool, e: ?)) -> !this"},"getFiles":{"!effects":["call !1 this=!this"],"!type":"fn(path: string, f: fn(data: Node, e: ?)) -> !this"},"readFile":{"!effects":["call !1 this=!this"],"!type":"fn(path: string, f: fn(data: string, e: ?)) -> !this"},"dirExist":{"!type":"fn(path: string) -> bool"},"copy":{"!effects":["call !2 this=!this"],"!type":"fn(source: Node, target: string, f: fn(data: bool, e: ?)) -> !this"},"deleteDir":{"!effects":["call !1 this=!this"],"!type":"fn(path: string, f: fn(data: bool, e: ?)) -> !this"},"writeFile":{"!effects":["call !2 this=!this"],"!type":"fn(path: string, data: string, f: fn(data: bool, e: ?)) -> !this"},"zipFiles":{"!effects":["call !2 this=!this"],"!type":"fn(source: Node, target: string, f: fn(data: bool, e: ?)) -> !this"}},"!url":""},"do_DateTimePicker":{"!type":"fn()","prototype":{"show":{"!effects":["call !6 this=!this"],"!type":"fn(type: number, data: string, maxDate: string, minDate: string, title: string, buttons: Node, f: fn(data: Node, e: ?)) -> !this"},"!proto":"!SM.prototype"},"!url":""},"do_Page":{"!type":"fn()","prototype":{"hideKeyboard":{"!type":"fn()"},"!proto":"!SM.prototype","getData":{"!type":"fn() -> string"},"remove":{"!type":"fn(id: )"},"supportPanClosePage":{"!type":"fn(data: string)"}},"!url":""},"do_TencentQQ":{"!type":"fn()","prototype":{"logout":{"!effects":["call !0 this=!this"],"!type":"fn(f: fn(data: bool, e: ?)) -> !this"},"!proto":"!SM.prototype","getUserInfo":{"!effects":["call !3 this=!this"],"!type":"fn(token: string, expires: string, openId: string, f: fn(data: string, e: ?)) -> !this"},"login":{"!effects":["call !1 this=!this"],"!type":"fn(appId: string, f: fn(data: string, e: ?)) -> !this"},"shareToQQ":{"!effects":["call !8 this=!this"],"!type":"fn(appId: string, type: number, title: string, url: string, image: string, summary: string, audio: string, appName: string, f: fn(data: bool, e: ?)) -> !this"},"shareToQzone":{"!effects":["call !6 this=!this"],"!type":"fn(appId: string, type: number, title: string, url: string, image: string, summary: string, f: fn(data: bool, e: ?)) -> !this"}},"!url":""},"do_Global":{"!type":"fn()","prototype":{"getVersion":{"!type":"fn() -> Node"},"getFromPasteboard":{"!type":"fn() -> string"},"exit":{"!type":"fn()"},"setToPasteboard":{"!type":"fn(data: string) -> bool"},"install":{"!effects":["call !1 this=!this"],"!type":"fn(src: string, f: fn(data: bool, e: ?)) -> !this"},"getTime":{"!type":"fn(format: string) -> string"},"!proto":"!SM.prototype","setMemory":{"!type":"fn(key: string, value: string)"},"getMemory":{"!type":"fn(key: string) -> string"},"getWakeupID":{"!type":"fn() -> string"}},"!url":""},"do_BaiduLocation":{"!type":"fn()","prototype":{"stop":{"!type":"fn()"},"start":{"!type":"fn(model: string, isLoop: bool)"},"!proto":"!SM.prototype"},"!url":""}},"!SM":{"!type":"fn()","prototype":{"!proto":"!E.prototype"},"!url":""},"Module":{"!type":"fn()","prototype":{"loaded":{"!doc":"","!type":"bool","!url":""},"parent":{"!doc":"","!type":"+Module","!url":""},"filename":{"!doc":"","!type":"string","!url":""},"children":{"!doc":"","!type":"[+Module]","!url":""},"exports":{"!doc":"","!type":"?","!url":""},"require":{"!doc":"","!type":"require","!url":""},"id":{"!doc":"","!type":"string","!url":""}}}}}});