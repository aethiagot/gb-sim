var ROLE_NONE = 0;
var ROLE_OFFENSIVE = 1;
var ROLE_DEFENSIVE = 2;
var ROLE_LOGISTICS = 3;
var TRANSPORT_CAPACITY = 120000;
var MAX_RESILIENCE = 100;
var MAX_RESILIENCE_OFFENSIVE = 140;
var QUEUES = 2;

var costs = [ 250, 200, 130, 200, 130, 200, 130, 380, 250, 150, 250, 150, 250, 150, 500, 200, 200, 200, 200, 400, 200, 800 ];
var links = [ null, 0, 0, 1, 2, 3, 4, 6, 7, 7, 8, 9, 10, 11, 13, 14, 14, 15, 16, 17, 18, 20 ];
var min = [ 0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3 ];
var max = [ 1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1 ];
var val = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var role = ROLE_NONE;

function initialize() {
    window.addEventListener('contextmenu', function (e) { 
        e.preventDefault(); 
    }, false);
    $("#data_transport_supplies").text((getTransportCapacity()).toLocaleString());
    $("#data_transport_points").text((2*(getTransportCapacity()/10000)).toLocaleString());
    load();
}

function updateData() {
    var data = getGloryPoints();
    $("#data_glory_points").text(data.toLocaleString());
    
    data = getQueues();
    $("#data_queues").text(data.toLocaleString());
    
    data = getTransportCapacity();
    $("#data_transport_supplies").text((data).toLocaleString());
    $("#data_transport_points").text((2*(data/10000)).toLocaleString());
    updateURL();
}

function getGloryPoints() {
    var res = 0;
    for(var i = 0; i < val.length; i++)
        res+= val[i]*costs[i];
    return res;
}

function getQueues() {
    return QUEUES + val[0] + val[7] + val[14];
}

function getTransportCapacity() {
    var res = TRANSPORT_CAPACITY;
    var bonus = ROLE_LOGISTICS?(4 * (val[3] + val[4] + val[10] + val[11] + val[18])):0;
    res += res*bonus/100;
    return res;
}

function reset() {
    role = ROLE_NONE;
    val = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    $("#panelO").removeClass("disabled");
    $("#panelD").removeClass("disabled");
    $("#panelL").removeClass("disabled");
    for(var i = 0; i < 22; i++) {
        $("#O"+i).addClass("disabled");
        $("#D"+i).addClass("disabled");
        $("#L"+i).addClass("disabled");
        $("#EO"+i).addClass("disabled");
        $("#ED"+i).addClass("disabled");
        $("#EL"+i).addClass("disabled");
        $("#VO"+i).text("0");
        $("#VD"+i).text("0");
        $("#VL"+i).text("0");
    }
    updateData();
}

function checkDependencies(id) {
    for(var i = 1; i < links.length; i++)
        if ((links[i] == id) && (val[i] > 0) && (val[id] <= min[i]))
            return false;
    return true;
}

function checkEdges(id) {
    for(var i = 1; i < links.length; i++)
        if ((links[i] == id) && (val[id] < min[i]))
            return false;
    return true;
}

function checkRole(mode) {
    if (role == ROLE_NONE)
        role = mode;
    else if (role != mode)
        return null;
    var res;
    switch(mode) {
        case ROLE_OFFENSIVE: 
            res = 'O';
            $("#panelD").addClass("disabled");
            $("#panelL").addClass("disabled");
            break;
        case ROLE_DEFENSIVE:
            res = 'D';
            $("#panelO").addClass("disabled");
            $("#panelL").addClass("disabled");
            break;
        case ROLE_LOGISTICS:
            res = 'L';
            $("#panelO").addClass("disabled");
            $("#panelD").addClass("disabled");
            break;
    }
    return res;
}

function addTalent(mode,id) {
    if ((val[id] < max[id]) && (id == 0 || val[links[id]] >= min[id])) {
        var mode_char = checkRole(mode);
        if (mode_char == null)
            return;
        val[id]++;
        $("#" + mode_char + id).removeClass("disabled");
        $("#V" + mode_char + id).text(val[id]);
        if (checkEdges(id))
            $("#E" + mode_char + id).removeClass("disabled");
        updateData();
    }
}

function removeTalent(mode,id) {
    if ((val[id] > 0) && checkDependencies(id)) {
        var mode_char = checkRole(mode);
        if (mode_char == null)
            return;
        val[id]--;
        if (val[id] == 0)
            $("#" + mode_char + id).addClass("disabled");
        $("#V" + mode_char + id).text(val[id]);
        if (!checkEdges(id))
            $("#E" + mode_char + id).addClass("disabled");
        if (id == 0 && val[id] == 0)
            reset();
        updateData();
    }
}

function load() {
    var idx = document.URL.indexOf('?');
    if (idx != -1) {
        var talents = document.URL.substring(idx+4, document.URL.length);
        role = parseInt(talents[0]);
        for(var i = 1; i < talents.length; i++) {
            var j = parseInt(talents[i]);
            while(j > 0) {
                addTalent(role,i-1);
                j--;
            }
        }
    }
}

function updateURL() {
    var url_export = "" + role;
    for(var i = 0; i < val.length; i++)
        url_export += val[i];
    
    var url = new URL(document.URL.toString());
    var query_string = url.search;
    var search_params = new URLSearchParams(query_string); 
    search_params.set('id', url_export);
    url.search = search_params.toString();
    var new_url = url.toString();
    console.log(new_url);
    if (history.pushState)
        window.history.pushState("", "", new_url);
    else
        document.location.href = new_url;
}
