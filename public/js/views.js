//EJS Compiled Views - This file was automatically generated on Thu Sep 15 2022 13:57:56 GMT+0200 (Ora legale dell’Europa centrale)
ejs.views_include = function(locals) {
    console.log("views_include_setup",locals);
    return function(path, d) {
        console.log("ejs.views_include",path,d);
        return ejs["views_"+path.replace(/\//g,"_")]({...d,...locals}, null, ejs.views_include(locals));
    }
};
ejs.views_create = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n\n<main class=\"mainContent\">\n\n\n    <form enctype=\"multipart/form-data\" class=\"forms formCreate\" action=\"/events\" method=\"POST\">\n        <label for=\"typeEvent\">Type of Event</label>\n        <input type=\"text\" id=\"typeEvent\" name=\"typeEvent\" placeholder=\"Football\" required/><br><br>\n        <label for=\"location\">Location</label>\n        <input type=\"text\" id=\"location\" name=\"location\" placeholder=\"Lugano\" required/><br><br>\n     \n\n        <label for=\"num\">No. of participants</label>\n        <input type=\"number\" id=\"num\" name=\"num\" placeholder=\"2\" min=\"2\" required/>\n        <br><br>\n\n        <label for=\"age\">Average age</label>\n        <input type=\"number\" id=\"age\" name=\"age\" placeholder=\"18\" min=\"12\" max=\"99\" required/>\n        <br><br>\n\n        <label for=\"cost\">Cost to be shared</label>\n        <input type=\"number\" id=\"cost\" name=\"cost\" placeholder=\"0\" min=\"0\" required />\n        <br><br>\n\n        <label for=\"level\">Level</label>\n        <select id=\"level\" name=\"level\">\n            <option value=\"basic\">Basic</option>\n            <option value=\"intermediate\">Intermediate</option>\n            <option value=\"advanced\">Advanced</option>\n        </select>\n        <br><br>\n\n        <label for=\"date\">Date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" required/>\n        <br><br>\n        \n        <label for=\"cover\">Cover image</label>\n        <input type=\"file\" id=\"cover\" name=\"cover\" accept=\".jpg, .png, .svg, .gif\" required/>\n        <br><br><br>\n\n\n        <input id=\"suButton\" class=\"btn41-43 btn-42\" type=\"submit\" value=\"Create\">\n    </form>\n\n\n\n</main>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n\n<main class=\"mainContent\">\n\n\n    <form enctype=\"multipart/form-data\" class=\"forms formCreate\" action=\"/events\" method=\"POST\">\n        <label for=\"typeEvent\">Type of Event</label>\n        <input type=\"text\" id=\"typeEvent\" name=\"typeEvent\" placeholder=\"Football\" required/><br><br>\n        <label for=\"location\">Location</label>\n        <input type=\"text\" id=\"location\" name=\"location\" placeholder=\"Lugano\" required/><br><br>\n     \n\n        <label for=\"num\">No. of participants</label>\n        <input type=\"number\" id=\"num\" name=\"num\" placeholder=\"2\" min=\"2\" required/>\n        <br><br>\n\n        <label for=\"age\">Average age</label>\n        <input type=\"number\" id=\"age\" name=\"age\" placeholder=\"18\" min=\"12\" max=\"99\" required/>\n        <br><br>\n\n        <label for=\"cost\">Cost to be shared</label>\n        <input type=\"number\" id=\"cost\" name=\"cost\" placeholder=\"0\" min=\"0\" required />\n        <br><br>\n\n        <label for=\"level\">Level</label>\n        <select id=\"level\" name=\"level\">\n            <option value=\"basic\">Basic</option>\n            <option value=\"intermediate\">Intermediate</option>\n            <option value=\"advanced\">Advanced</option>\n        </select>\n        <br><br>\n\n        <label for=\"date\">Date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" required/>\n        <br><br>\n        \n        <label for=\"cover\">Cover image</label>\n        <input type=\"file\" id=\"cover\" name=\"cover\" accept=\".jpg, .png, .svg, .gif\" required/>\n        <br><br><br>\n\n\n        <input id=\"suButton\" class=\"btn41-43 btn-42\" type=\"submit\" value=\"Create\">\n    </form>\n\n\n\n</main>\n")
    ; __line = 49
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_edit = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n\n<main class=\"mainContent\">\n\n    <form enctype=\"multipart/form-data\" class=\"forms\" >\n        <label for=\"typeEvent\">Type of Event</label>\n        <input type=\"text\" id=\"typeEvent\" name=\"typeEvent\" value=\"<%= event.typeEvent %>\" ><br><br>\n        <label for=\"location\">Location</label>\n        <input type=\"text\" id=\"location\" name=\"location\" value=\"<%= event.location %>\"><br><br>\n\n        <label for=\"num\">No. of participants</label>\n        <input type=\"number\" id=\"num\" name=\"num\" value=\"<%= event.num %>\" min=\"2\">\n        <br><br>\n\n        <label for=\"age\">Average age</label>\n        <input type=\"number\" id=\"age\" name=\"age\" value=\"<%= event.age %>\" min=\"12\" max=\"99\">\n        <br><br>\n\n        <label for=\"cost\">Cost to be shared</label>\n        <input type=\"number\" id=\"cost\" name=\"cost\" value=\"<%= event.cost %>\" min=\"0\">\n        <br><br>\n\n        <label for=\"level\">Level</label>\n        <select id=\"level\" name=\"level\" value=\"<%= event.level %>\">\n            <option value=\"basic\">Basic</option>\n            <option value=\"intermediate\">Intermediate</option>\n            <option value=\"advanced\">Advanced</option>\n        </select>\n        <br><br>\n\n        <label for=\"date\">Date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"<%= event.date %>\">\n        <br><br>\n\n        <label>Cover image</label>\n        <input type=\"file\" name=\"cover\" id=\"cover\" accept=\".jpg, .png, .svg, .gif\">\n        <br><br><br>\n\n        <input id=\"editPut\" class=\"btn41-43 btn-42\" data-id=\"<%=event._id.valueOf()%>\" type=\"submit\" value=\"Edit\">\n    </form>\n\n\n\n</main>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n\n<main class=\"mainContent\">\n\n    <form enctype=\"multipart/form-data\" class=\"forms\" >\n        <label for=\"typeEvent\">Type of Event</label>\n        <input type=\"text\" id=\"typeEvent\" name=\"typeEvent\" value=\"")
    ; __line = 8
    ; __append(escapeFn( event.typeEvent ))
    ; __append("\" ><br><br>\n        <label for=\"location\">Location</label>\n        <input type=\"text\" id=\"location\" name=\"location\" value=\"")
    ; __line = 10
    ; __append(escapeFn( event.location ))
    ; __append("\"><br><br>\n\n        <label for=\"num\">No. of participants</label>\n        <input type=\"number\" id=\"num\" name=\"num\" value=\"")
    ; __line = 13
    ; __append(escapeFn( event.num ))
    ; __append("\" min=\"2\">\n        <br><br>\n\n        <label for=\"age\">Average age</label>\n        <input type=\"number\" id=\"age\" name=\"age\" value=\"")
    ; __line = 17
    ; __append(escapeFn( event.age ))
    ; __append("\" min=\"12\" max=\"99\">\n        <br><br>\n\n        <label for=\"cost\">Cost to be shared</label>\n        <input type=\"number\" id=\"cost\" name=\"cost\" value=\"")
    ; __line = 21
    ; __append(escapeFn( event.cost ))
    ; __append("\" min=\"0\">\n        <br><br>\n\n        <label for=\"level\">Level</label>\n        <select id=\"level\" name=\"level\" value=\"")
    ; __line = 25
    ; __append(escapeFn( event.level ))
    ; __append("\">\n            <option value=\"basic\">Basic</option>\n            <option value=\"intermediate\">Intermediate</option>\n            <option value=\"advanced\">Advanced</option>\n        </select>\n        <br><br>\n\n        <label for=\"date\">Date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"")
    ; __line = 33
    ; __append(escapeFn( event.date ))
    ; __append("\">\n        <br><br>\n\n        <label>Cover image</label>\n        <input type=\"file\" name=\"cover\" id=\"cover\" accept=\".jpg, .png, .svg, .gif\">\n        <br><br><br>\n\n        <input id=\"editPut\" class=\"btn41-43 btn-42\" data-id=\"")
    ; __line = 40
    ; __append(escapeFn(event._id.valueOf()))
    ; __append("\" type=\"submit\" value=\"Edit\">\n    </form>\n\n\n\n</main>\n")
    ; __line = 46
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_event = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<main class=\"mainContent\">\n\n    <h1 id=\"titlEvent\">\n        <%= event.typeEvent.charAt(0).toUpperCase() + event.typeEvent.slice(1) %>\n    </h1>\n\n    <section class=\"event\">\n        <div class=\"eventText\">\n            <div id=\"eventLabels\">\n                <h2>No. of Partecipants: </h2>\n                <h2>Date of the event: </h2>\n                <h2>Level:</h2>\n                <h2>Location: </h2>\n                <h2>Average Age: </h2>\n                <h2>Cost: </h2>\n            </div>\n\n            <div id=\"eventData\">\n                <h2 id=\"numPersons\" data-persons=\"<%= event.persons%>\" data-num=\"<%= event.num%>\">\n                    <%= event.persons %>/<%= event.num %>\n                </h2>\n                <h2 id=\"date\">\n                    <%= event.date%>\n                </h2>\n                <h2 id=\"level\">\n                    <%= event.level%>\n                </h2>\n                <h2 id=\"location\">\n                    <%= event.location%>\n                </h2>\n                <h2 id=\"age\">\n                    <%= event.age%>\n\n                </h2>\n                <h2 id=\"cost\">\n                    <%= event.cost%>   \n                </h2>\n            </div>\n        </div>\n\n\n\n\n\n        <!-- <form enctype=\"multipart/form\" class=\"formEvent\"\n                        action=\"/events/edit/?id=<%= event._id.valueOf()%>\">\n                        <input id=\"suButton\" type=\"submit\" value=\"Edit\">\n                    </form>  -->\n        <!-- <br> -->\n        <form enctype=\"multipart/form\" class=\"formEvent formJoin\" id=\"formJoin\">\n            <input class=\"join btn41-43 btn-42\" data-id=\"<%= event._id.valueOf()%>\" type=\"submit\" value=\"Join Us\">\n        </form>\n\n      <!--   <form enctype=\"multipart/form\" class=\"formEvent formDisjoin\" id=\"formDisjoin\">\n            <input class=\"dijoin btn41-43 btn-42\" data-id=\"<%= event._id.valueOf()%>\" type=\"submit\" value=\"Disjoin\">\n        </form>` -->\n\n        <form enctype=\"multipart/form\" class=\"formEvent formEdit\">\n            <input class=\"edit btn41-43 btn-42\" data-id=\"<%= event._id.valueOf()%>\" type=\"submit\" value=\"Edit\">\n        </form>\n\n        <form enctype=\"multipart/form\" class=\"formEvent formDelete\">\n            <input id=\"delete\" class=\"btn41-43 btn-42\" data-id=\"<%= event._id.valueOf()%>\" type=\"submit\" value=\"Delete\">\n        </form>\n\n    </section>\n\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class=\"mainContent\">\n\n    <h1 id=\"titlEvent\">\n        ")
    ; __line = 4
    ; __append(escapeFn( event.typeEvent.charAt(0).toUpperCase() + event.typeEvent.slice(1) ))
    ; __append("\n    </h1>\n\n    <section class=\"event\">\n        <div class=\"eventText\">\n            <div id=\"eventLabels\">\n                <h2>No. of Partecipants: </h2>\n                <h2>Date of the event: </h2>\n                <h2>Level:</h2>\n                <h2>Location: </h2>\n                <h2>Average Age: </h2>\n                <h2>Cost: </h2>\n            </div>\n\n            <div id=\"eventData\">\n                <h2 id=\"numPersons\" data-persons=\"")
    ; __line = 19
    ; __append(escapeFn( event.persons))
    ; __append("\" data-num=\"")
    ; __append(escapeFn( event.num))
    ; __append("\">\n                    ")
    ; __line = 20
    ; __append(escapeFn( event.persons ))
    ; __append("/")
    ; __append(escapeFn( event.num ))
    ; __append("\n                </h2>\n                <h2 id=\"date\">\n                    ")
    ; __line = 23
    ; __append(escapeFn( event.date))
    ; __append("\n                </h2>\n                <h2 id=\"level\">\n                    ")
    ; __line = 26
    ; __append(escapeFn( event.level))
    ; __append("\n                </h2>\n                <h2 id=\"location\">\n                    ")
    ; __line = 29
    ; __append(escapeFn( event.location))
    ; __append("\n                </h2>\n                <h2 id=\"age\">\n                    ")
    ; __line = 32
    ; __append(escapeFn( event.age))
    ; __append("\n\n                </h2>\n                <h2 id=\"cost\">\n                    ")
    ; __line = 36
    ; __append(escapeFn( event.cost))
    ; __append("   \n                </h2>\n            </div>\n        </div>\n\n\n\n\n\n        <!-- <form enctype=\"multipart/form\" class=\"formEvent\"\n                        action=\"/events/edit/?id=")
    ; __line = 46
    ; __append(escapeFn( event._id.valueOf()))
    ; __append("\">\n                        <input id=\"suButton\" type=\"submit\" value=\"Edit\">\n                    </form>  -->\n        <!-- <br> -->\n        <form enctype=\"multipart/form\" class=\"formEvent formJoin\" id=\"formJoin\">\n            <input class=\"join btn41-43 btn-42\" data-id=\"")
    ; __line = 51
    ; __append(escapeFn( event._id.valueOf()))
    ; __append("\" type=\"submit\" value=\"Join Us\">\n        </form>\n\n      <!--   <form enctype=\"multipart/form\" class=\"formEvent formDisjoin\" id=\"formDisjoin\">\n            <input class=\"dijoin btn41-43 btn-42\" data-id=\"")
    ; __line = 55
    ; __append(escapeFn( event._id.valueOf()))
    ; __append("\" type=\"submit\" value=\"Disjoin\">\n        </form>` -->\n\n        <form enctype=\"multipart/form\" class=\"formEvent formEdit\">\n            <input class=\"edit btn41-43 btn-42\" data-id=\"")
    ; __line = 59
    ; __append(escapeFn( event._id.valueOf()))
    ; __append("\" type=\"submit\" value=\"Edit\">\n        </form>\n\n        <form enctype=\"multipart/form\" class=\"formEvent formDelete\">\n            <input id=\"delete\" class=\"btn41-43 btn-42\" data-id=\"")
    ; __line = 63
    ; __append(escapeFn( event._id.valueOf()))
    ; __append("\" type=\"submit\" value=\"Delete\">\n        </form>\n\n    </section>\n\n</main>")
    ; __line = 68
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_event1 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div id=\"eventData\">\n    <h2 id=\"numPersons\" data-persons=\"<%= event.persons%>\" data-num=\"<%= event.num%>\">\n        <%= event.persons %>/<%= event.num %>\n    </h2>\n    <h2 id=\"date\">\n        <%= event.date%>\n    </h2>\n    <h2 id=\"level\">\n        <%= event.level%>\n    </h2>\n    <h2 id=\"location\">\n        <%= event.location%>\n    </h2>\n    <h2 id=\"age\">\n        <%= event.age%>\n\n    </h2>\n    <h2 id=\"cost\">\n        <%= event.cost%>   \n    </h2>\n</div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div id=\"eventData\">\n    <h2 id=\"numPersons\" data-persons=\"")
    ; __line = 2
    ; __append(escapeFn( event.persons))
    ; __append("\" data-num=\"")
    ; __append(escapeFn( event.num))
    ; __append("\">\n        ")
    ; __line = 3
    ; __append(escapeFn( event.persons ))
    ; __append("/")
    ; __append(escapeFn( event.num ))
    ; __append("\n    </h2>\n    <h2 id=\"date\">\n        ")
    ; __line = 6
    ; __append(escapeFn( event.date))
    ; __append("\n    </h2>\n    <h2 id=\"level\">\n        ")
    ; __line = 9
    ; __append(escapeFn( event.level))
    ; __append("\n    </h2>\n    <h2 id=\"location\">\n        ")
    ; __line = 12
    ; __append(escapeFn( event.location))
    ; __append("\n    </h2>\n    <h2 id=\"age\">\n        ")
    ; __line = 15
    ; __append(escapeFn( event.age))
    ; __append("\n\n    </h2>\n    <h2 id=\"cost\">\n        ")
    ; __line = 19
    ; __append(escapeFn( event.cost))
    ; __append("   \n    </h2>\n</div>\n")
    ; __line = 22
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_featured = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n\n\n\n<main class=\"mainContent\">\n\n    <section class=\"home\">\n        \n        <% for (var i = events.length-1; i >=0; i--) {%>\n\n            <a href=\"/event/<%= events[i]._id %>\" data-id=\"<%= events[i]._id %>\"><article class=\"eventList\" style=\"background-image: url(<%=events[i].path%>); background-size: cover;\"><div class=\"centered\"><span class=\"typehover\"><%=events[i].typeEvent.charAt(0).toUpperCase() + events[i].typeEvent.slice(1) %></span><span id=\"numEventPerson\"><%= events[i].persons  %>/<%= events[i].num %></span></div></article></a>\n\n        <% } %>       \n\n    </section>\n\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n\n\n\n<main class=\"mainContent\">\n\n    <section class=\"home\">\n        \n        ")
    ; __line = 10
    ;  for (var i = events.length-1; i >=0; i--) {
    ; __append("\n\n            <a href=\"/event/")
    ; __line = 12
    ; __append(escapeFn( events[i]._id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( events[i]._id ))
    ; __append("\"><article class=\"eventList\" style=\"background-image: url(")
    ; __append(escapeFn(events[i].path))
    ; __append("); background-size: cover;\"><div class=\"centered\"><span class=\"typehover\">")
    ; __append(escapeFn(events[i].typeEvent.charAt(0).toUpperCase() + events[i].typeEvent.slice(1) ))
    ; __append("</span><span id=\"numEventPerson\">")
    ; __append(escapeFn( events[i].persons  ))
    ; __append("/")
    ; __append(escapeFn( events[i].num ))
    ; __append("</span></div></article></a>\n\n        ")
    ; __line = 14
    ;  } 
    ; __append("       \n\n    </section>\n\n</main>")
    ; __line = 18
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_asideR = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<aside class=\"asideR\">\n\n</aside>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<aside class=\"asideR\">\n\n</aside>\n")
    ; __line = 4
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_contain = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n    <div class=\"contain\">\n\n        <aside class=\"asideL\">\n\n        </aside>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n    <div class=\"contain\">\n\n        <aside class=\"asideL\">\n\n        </aside>")
    ; __line = 7
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<aside class=\"asideR\">\n\n</aside>\n\n\n\n</div>\n</body>\n<footer>\n<span>Gualandris Andrea - &#169; copyright all rights reserved</span>\n<p></p>\n</footer>\n\n\n\n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<aside class=\"asideR\">\n\n</aside>\n\n\n\n</div>\n</body>\n<footer>\n<span>Gualandris Andrea - &#169; copyright all rights reserved</span>\n<p></p>\n</footer>\n\n\n\n\n</html>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_header = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n\n<head>\n    <title>FriendsMeet</title>\n    <meta name=\"author\" content=\"Andrea Gualandris\">\n\n    <link href=\"../../css/style.css\" rel=\"stylesheet\" />\n\n    <style type=\"text/css\">\n        /* @import url(\"../../css/style.css\"); */\n        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Rock+Salt&display=swap');\n    </style>\n\n    <script src=\"../../socket.io/socket.io.js\"></script>\n    <script src=\"../../js/ajax.js\"></script>\n    <script src=\"../../ejs.min.js\"></script>\n    <script src=\"../../js/views.js\"></script>\n    <link rel=\"icon\" href=\"../../img/favicon.ico\" />\n\n</head>\n\n\n\n<body class=\"bodyContainer\" onload=\"my_fetch()\">\n\n    <header class=\"header\">\n        <h1 id=\"title\">FriendsMeet</h1>\n\n    </header>\n\n  \n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n\n<head>\n    <title>FriendsMeet</title>\n    <meta name=\"author\" content=\"Andrea Gualandris\">\n\n    <link href=\"../../css/style.css\" rel=\"stylesheet\" />\n\n    <style type=\"text/css\">\n        /* @import url(\"../../css/style.css\"); */\n        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Rock+Salt&display=swap');\n    </style>\n\n    <script src=\"../../socket.io/socket.io.js\"></script>\n    <script src=\"../../js/ajax.js\"></script>\n    <script src=\"../../ejs.min.js\"></script>\n    <script src=\"../../js/views.js\"></script>\n    <link rel=\"icon\" href=\"../../img/favicon.ico\" />\n\n</head>\n\n\n\n<body class=\"bodyContainer\" onload=\"my_fetch()\">\n\n    <header class=\"header\">\n        <h1 id=\"title\">FriendsMeet</h1>\n\n    </header>\n\n  \n")
    ; __line = 32
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_navbar = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n<div class=\"navbar\">\n\n<% let span = document.querySelector(\".account #nick\")\n    if (!span)\n    { %>\n    <section class=\"nav\">\n        <a id=\"home\" href=\"/\">Home</a>\n    </section>\n    <% } else\n    { %>\n    <section class=\"nav\">\n        <a id=\"home\" href=\"/\">Logout</a>\n    </section>\n    <%}%>\n    <section class=\"nav\">\n        <a id=\"page_create\" href=\"/events/create\">Create</a>\n    </section>\n\n    <section class=\"nav\">\n        <a id=\"page_featured\" href=\"/events\">Featured</a>\n    </section>\n\n    <section class=\"nav\">\n        <a id=\"page_search\" href=\"/events/search\">Search</a>\n    </section>\n\n    <section class=\"nav\">\n        <a id=\"page_myevents\" href=\"/myevents\">My Events</a>\n    </section>\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n<div class=\"navbar\">\n\n")
    ; __line = 5
    ;  let span = document.querySelector(".account #nick")
    if (!span)
    { 
    ; __line = 7
    ; __append("\n    <section class=\"nav\">\n        <a id=\"home\" href=\"/\">Home</a>\n    </section>\n    ")
    ; __line = 11
    ;  } else
    { 
    ; __line = 12
    ; __append("\n    <section class=\"nav\">\n        <a id=\"home\" href=\"/\">Logout</a>\n    </section>\n    ")
    ; __line = 16
    ; }
    ; __append("\n    <section class=\"nav\">\n        <a id=\"page_create\" href=\"/events/create\">Create</a>\n    </section>\n\n    <section class=\"nav\">\n        <a id=\"page_featured\" href=\"/events\">Featured</a>\n    </section>\n\n    <section class=\"nav\">\n        <a id=\"page_search\" href=\"/events/search\">Search</a>\n    </section>\n\n    <section class=\"nav\">\n        <a id=\"page_myevents\" href=\"/myevents\">My Events</a>\n    </section>\n</div>\n\n")
    ; __line = 34
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_searchBar = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n    <section class=\"search\">\n        <input type=\"search\" id=\"s\" name=\"s\" placeholder=\"Search from category or Location\">\n    </section>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n    <section class=\"search\">\n        <input type=\"search\" id=\"s\" name=\"s\" placeholder=\"Search from category or Location\">\n    </section>\n")
    ; __line = 6
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n<main class=\"mainContent\">\n\n    <section class=\"home\">\n        <article class=\"menu\" id=\"page_create\"><a href=\"/events/create\">Create new event</a></article>\n        <article class=\"menu\" id=\"page_search\" ><a href=\"/events/search\">Search event</a></article>\n\n        <article class=\"menu\" id=\"page_featured\"><a href=\"/events\">Featured</a></article>\n        <article class=\"menu\" id=\"page_myevents\"><a href=\"/myevents\">My events</a></article>\n\n    </section>\n\n</main>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n<main class=\"mainContent\">\n\n    <section class=\"home\">\n        <article class=\"menu\" id=\"page_create\"><a href=\"/events/create\">Create new event</a></article>\n        <article class=\"menu\" id=\"page_search\" ><a href=\"/events/search\">Search event</a></article>\n\n        <article class=\"menu\" id=\"page_featured\"><a href=\"/events\">Featured</a></article>\n        <article class=\"menu\" id=\"page_myevents\"><a href=\"/myevents\">My events</a></article>\n\n    </section>\n\n</main>\n\n")
    ; __line = 15
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_listNick = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<aside class=\"asideR asideList\">\n    <span class=\"asideList\" >Partecipants</span>\n\n    <%for(let i = 0; i < event.listNick.length; i++) { \n\n    %>\n        <span class=\"asideList\" style=\"display: list-item;\" data-nick=\"<%= event.listNick[i]%>\"><%= event.listNick[i] %></span>\n        <% } %>\n</aside>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<aside class=\"asideR asideList\">\n    <span class=\"asideList\" >Partecipants</span>\n\n    ")
    ; __line = 4
    ; for(let i = 0; i < event.listNick.length; i++) { 

    
    ; __line = 6
    ; __append("\n        <span class=\"asideList\" style=\"display: list-item;\" data-nick=\"")
    ; __line = 7
    ; __append(escapeFn( event.listNick[i]))
    ; __append("\">")
    ; __append(escapeFn( event.listNick[i] ))
    ; __append("</span>\n        ")
    ; __line = 8
    ;  } 
    ; __append("\n</aside>")
    ; __line = 9
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n\n<main class=\"mainContent\">\n\n    <br><br>\n    <form enctype=\"multipart/form-data\" class=\"forms\" action=\"/login\" method=\"POST\">\n        <label class=\"labelSL\" for=\"nickname\">Nickname</label>\n        <input type=\"text\" id=\"nickname\" name=\"nickname\" placeholder=\"Nickname\" required><br><br>\n\n        <label class=\"labelSL\" for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" required><br><br>\n\n        <br><br><br>\n\n\n        <input id=\"suButton\" class=\"btn41-43 btn-42\" type=\"submit\" value=\"Login\">\n    </form>\n\n\n\n</main>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n\n<main class=\"mainContent\">\n\n    <br><br>\n    <form enctype=\"multipart/form-data\" class=\"forms\" action=\"/login\" method=\"POST\">\n        <label class=\"labelSL\" for=\"nickname\">Nickname</label>\n        <input type=\"text\" id=\"nickname\" name=\"nickname\" placeholder=\"Nickname\" required><br><br>\n\n        <label class=\"labelSL\" for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" required><br><br>\n\n        <br><br><br>\n\n\n        <input id=\"suButton\" class=\"btn41-43 btn-42\" type=\"submit\" value=\"Login\">\n    </form>\n\n\n\n</main>\n")
    ; __line = 23
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_myevents = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n<main class=\"mainContentMyEvents\">\n\n\n    <section class=\"myevents\">\n\n        <h1 class=\"title_myev\">Created</h1>\n        <section class=\"home homeMyEvents\">\n\n            <% for (var i = created.length - 1; i>=0; i--) {%>\n\n                <a href=\"/event/<%= created[i]._id %>\" data-id=\"<%= created[i]._id %>\"><article class=\"eventList\" style=\"background-image: url(<%=created[i].path%>); background-size: cover;\">\n                    <div class=\"centered\"><span class=\"typehover\"><%=created[i].typeEvent.charAt(0).toUpperCase() + created[i].typeEvent.slice(1) %></span>\n                        <span id=\"numEventPerson\"><%= created[i].persons  %>/<%= created[i].num %></span>\n                    </div>\n                </article></a>\n\n            <% } %>    \n\n        </section>\n\n    </section>\n\n    <hr id=\"line_myev\"  color=\"#074e91\">\n   \n    <section class=\"myevents\">\n        <h1 class=\"title_myev\">Joined</h1>\n        \n        \n        <section class=\"home homeMyEvents\">\n\n            <% for (var i = 0; i < joined.length; i++) {\n                \n                if (joined[i].creator != nickname) {%>\n\n                <a href=\"/event/<%= joined[i]._id %>\" data-id=\"<%= joined[i]._id %>\"><article class=\"eventList\" style=\"background-image: url(<%=joined[i].path%>); background-size: cover;\">\n                    <div class=\"centered\"><span class=\"typehover\"><%=joined[i].typeEvent.charAt(0).toUpperCase() + joined[i].typeEvent.slice(1) %></span>\n                        <span id=\"numEventPerson\"><%= joined[i].persons  %>/<%= joined[i].num %></span>\n                    </div>\n                </article></a>\n                 \n                \n            <% }} %>    \n\n        </section>\n\n    </section>\n\n\n\n\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n<main class=\"mainContentMyEvents\">\n\n\n    <section class=\"myevents\">\n\n        <h1 class=\"title_myev\">Created</h1>\n        <section class=\"home homeMyEvents\">\n\n            ")
    ; __line = 10
    ;  for (var i = created.length - 1; i>=0; i--) {
    ; __append("\n\n                <a href=\"/event/")
    ; __line = 12
    ; __append(escapeFn( created[i]._id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( created[i]._id ))
    ; __append("\"><article class=\"eventList\" style=\"background-image: url(")
    ; __append(escapeFn(created[i].path))
    ; __append("); background-size: cover;\">\n                    <div class=\"centered\"><span class=\"typehover\">")
    ; __line = 13
    ; __append(escapeFn(created[i].typeEvent.charAt(0).toUpperCase() + created[i].typeEvent.slice(1) ))
    ; __append("</span>\n                        <span id=\"numEventPerson\">")
    ; __line = 14
    ; __append(escapeFn( created[i].persons  ))
    ; __append("/")
    ; __append(escapeFn( created[i].num ))
    ; __append("</span>\n                    </div>\n                </article></a>\n\n            ")
    ; __line = 18
    ;  } 
    ; __append("    \n\n        </section>\n\n    </section>\n\n    <hr id=\"line_myev\"  color=\"#074e91\">\n   \n    <section class=\"myevents\">\n        <h1 class=\"title_myev\">Joined</h1>\n        \n        \n        <section class=\"home homeMyEvents\">\n\n            ")
    ; __line = 32
    ;  for (var i = 0; i < joined.length; i++) {
                
                if (joined[i].creator != nickname) {
    ; __line = 34
    ; __append("\n\n                <a href=\"/event/")
    ; __line = 36
    ; __append(escapeFn( joined[i]._id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( joined[i]._id ))
    ; __append("\"><article class=\"eventList\" style=\"background-image: url(")
    ; __append(escapeFn(joined[i].path))
    ; __append("); background-size: cover;\">\n                    <div class=\"centered\"><span class=\"typehover\">")
    ; __line = 37
    ; __append(escapeFn(joined[i].typeEvent.charAt(0).toUpperCase() + joined[i].typeEvent.slice(1) ))
    ; __append("</span>\n                        <span id=\"numEventPerson\">")
    ; __line = 38
    ; __append(escapeFn( joined[i].persons  ))
    ; __append("/")
    ; __append(escapeFn( joined[i].num ))
    ; __append("</span>\n                    </div>\n                </article></a>\n                 \n                \n            ")
    ; __line = 43
    ;  }} 
    ; __append("    \n\n        </section>\n\n    </section>\n\n\n\n\n</main>")
    ; __line = 52
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_search = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n<%console.log(events)\n if(!events) { %>\n                    <main class=\"mainContent\" style=\"\n                                                    background-image: url(img/gifside.gif) ;\n                                                    background-repeat: no-repeat;\n                                                    background-position: center;\n                                                    background-size:cover;\n                                                    background-size: 335px;\">\n\n                        <section class=\"home\">\n\n                        </section>\n\n                    </main>\n\n        <% }else  { %>\n\n                    <main class=\"mainContent\">\n                        <section class=\"home\">\n\n                        <% if(events) { for (var i=0; i < events.length; i++) { %>\n\n                            <a href=\"/event/<%= events[i]._id %>\" data-id=\"<%= events[i]._id %>\">\n                                <article class=\"eventList\"\n                                    style=\"background-image: url(../<%=events[i].path%>); background-size: cover;\">\n                                    <div class=\"centered\"><span class=\"typehover\"><%=events[i].typeEvent%></span>\n                                                          <span id=\"numEventPerson\"><%= events[i].persons  %>/<%= events[i].num %></span>\n                                    </div>\n                                </article>\n                                    \n                            </a>\n                \n                            <% } }%>\n\n                            </section>\n                    </main>\n\n      <%  }\n        %>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n")
    ; __line = 3
    ; console.log(events)
 if(!events) { 
    ; __line = 4
    ; __append("\n                    <main class=\"mainContent\" style=\"\n                                                    background-image: url(img/gifside.gif) ;\n                                                    background-repeat: no-repeat;\n                                                    background-position: center;\n                                                    background-size:cover;\n                                                    background-size: 335px;\">\n\n                        <section class=\"home\">\n\n                        </section>\n\n                    </main>\n\n        ")
    ; __line = 18
    ;  }else  { 
    ; __append("\n\n                    <main class=\"mainContent\">\n                        <section class=\"home\">\n\n                        ")
    ; __line = 23
    ;  if(events) { for (var i=0; i < events.length; i++) { 
    ; __append("\n\n                            <a href=\"/event/")
    ; __line = 25
    ; __append(escapeFn( events[i]._id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( events[i]._id ))
    ; __append("\">\n                                <article class=\"eventList\"\n                                    style=\"background-image: url(../")
    ; __line = 27
    ; __append(escapeFn(events[i].path))
    ; __append("); background-size: cover;\">\n                                    <div class=\"centered\"><span class=\"typehover\">")
    ; __line = 28
    ; __append(escapeFn(events[i].typeEvent))
    ; __append("</span>\n                                                          <span id=\"numEventPerson\">")
    ; __line = 29
    ; __append(escapeFn( events[i].persons  ))
    ; __append("/")
    ; __append(escapeFn( events[i].num ))
    ; __append("</span>\n                                    </div>\n                                </article>\n                                    \n                            </a>\n                \n                            ")
    ; __line = 35
    ;  } }
    ; __append("\n\n                            </section>\n                    </main>\n\n      ")
    ; __line = 40
    ;   }
        
    ; __line = 41
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_signUp = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n\n<main class=\"mainContent\">\n\n\n    <form enctype=\"multipart/form-data\" class=\"forms\" action=\"/signup\" method=\"POST\">\n\n        <label for=\"nickname\">Nickname</label>\n        <input type=\"text\" id=\"nickname\" name=\"nickname\" placeholder=\"Nickname\" required><br><br>\n\n        <label for=\"name\">Name</label>\n        <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Name\" required><br><br>\n\n        <label for=\"surname\">Surname</label>\n        <input type=\"text\" id=\"surname\" name=\"surname\" placeholder=\"Surname\" required><br><br>\n\n        <label for=\"age\">Age</label>\n        <input type=\"number\" id=\"age\" name=\"age\" placeholder=\"Age\" min=\"12\" required><br><br>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" required><br><br>\n\n\n        <br><br><br>\n\n\n        <input id=\"suButton\" class=\"btn41-43 btn-42\" type=\"submit\" value=\"Sign Up\" placeholder=\"Sign Up\" >\n    </form>\n\n\n\n</main>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n\n<main class=\"mainContent\">\n\n\n    <form enctype=\"multipart/form-data\" class=\"forms\" action=\"/signup\" method=\"POST\">\n\n        <label for=\"nickname\">Nickname</label>\n        <input type=\"text\" id=\"nickname\" name=\"nickname\" placeholder=\"Nickname\" required><br><br>\n\n        <label for=\"name\">Name</label>\n        <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Name\" required><br><br>\n\n        <label for=\"surname\">Surname</label>\n        <input type=\"text\" id=\"surname\" name=\"surname\" placeholder=\"Surname\" required><br><br>\n\n        <label for=\"age\">Age</label>\n        <input type=\"number\" id=\"age\" name=\"age\" placeholder=\"Age\" min=\"12\" required><br><br>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" required><br><br>\n\n\n        <br><br><br>\n\n\n        <input id=\"suButton\" class=\"btn41-43 btn-42\" type=\"submit\" value=\"Sign Up\" placeholder=\"Sign Up\" >\n    </form>\n\n\n\n</main>\n")
    ; __line = 34
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}