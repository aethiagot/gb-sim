var ROLE_NONE = 0;
var ROLE_OFFENSIVE = 1;
var ROLE_DEFENSIVE = 2;
var ROLE_LOGISTICS = 3;

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
    updateData();
}

function updateData() {
    var role_char = role==ROLE_OFFENSIVE?'o':role==ROLE_DEFENSIVE?'d':role==ROLE_LOGISTICS?'l':'';
    var data;

    /* General data */
    data = getGloryPoints();
    $("#data_glory_points").text(data.toLocaleString());
    data = getQueues();
    $("#data_queues").text(data.toLocaleString());
    data = getMarchingSpeed();
    $("#data_marching_speed").text(data.toLocaleString());
    data = getArmySize();
    $("#data_army_size").text(data.toLocaleString());
    
    /* Transport & Trading */
    data = getTransportCapacity();
    $("#data_transport_supplies").text((data).toLocaleString());
    $("#data_transport_points").text((2*(data/10000)).toLocaleString());
    data = getTransportSpeed();
    $("#datal_transport_speed").text((data).toLocaleString());
    data = getTradingEfficiency();
    $("#data_trading_efficiency").text((data).toLocaleString());
    data = getTradingTimeStr(getTradingTime());
    $("#data_trading_time").text((data).toLocaleString());
    
    /* Battle stats */
    data = getTotalAttack();
    $("#data" + role_char + "_attack").text((data).toLocaleString());
    data = getTotalDefense();
    $("#data" + role_char + "_defense").text((data).toLocaleString());
    data = getTotalHealth();
    $("#data" + role_char + "_health").text((data).toLocaleString());

    /* Resilience */
    data = getResilienceLimit();
    $("#data_resilience_limit").text((data).toLocaleString());
    data = getResilienceBattle();
    $("#data_resilience_battle").text((data).toLocaleString());
    data = getResilienceMovement();
    $("#data_resilience_move").text((data).toLocaleString());

    /* Casualties */
    data = getEnemyCasualtyRate();
    $("#data" + role_char + "_enemy_casualty").text((data).toLocaleString());
    data = getAlliedCasualtyRate();
    $("#data" + role_char + "_allied_casualty").text((data).toLocaleString());
    
    showRoleData();
    updateURL();
}

function showRoleData() {
        switch(role) {
            case ROLE_OFFENSIVE:
                $("#data_offensive").show();
                $("#data_defensive").hide();
                $("#data_logistics").hide();
                break;
            case ROLE_DEFENSIVE:
                $("#data_offensive").hide();
                $("#data_defensive").show();
                $("#data_logistics").hide();
                break;
            case ROLE_LOGISTICS:
                $("#data_offensive").hide();
                $("#data_defensive").hide();
                $("#data_logistics").show();
                $("#ee0").show();
                $("#ee1").show();
                $("#ee2").show();
                $("#ee3").show();
                $("#ee4").show();
                break;
            default:
                $("#data_offensive").hide();
                $("#data_defensive").hide();
                $("#data_logistics").show();
                $("#ee0").hide();
                $("#ee1").hide();
                $("#ee2").hide();
                $("#ee3").hide();
                $("#ee4").hide();
        }
}

function getGloryPoints() {
    var res = 0;
    for(var i = 0; i < val.length; i++)
        res+= val[i]*costs[i];
    return res;
}

function getQueues() {
    return 2 + val[0] + val[7] + val[14];
}

function getMarchingSpeed() {
    return role==ROLE_OFFENSIVE?30:0;
}

function getArmySize() {
    return (role==ROLE_OFFENSIVE || role==ROLE_DEFENSIVE)?(20000 * val[12]):0;
}

function getTransportCapacity() {
    var res = 120000; //Default Transport Capacity
    var bonus = role==ROLE_LOGISTICS?(4 * (val[3] + val[4] + val[10] + val[11] + val[18])):0;
    return res + res*bonus/100;
}

function getTransportSpeed() {
    return role==ROLE_LOGISTICS?(4 * (val[1] + val[2] + val[8] + val[9] + val[16])):0;
}

function getTradingEfficiency() {
    var res = role==ROLE_OFFENSIVE?-50:role==ROLE_LOGISTICS?30:0;
    if (role == ROLE_LOGISTICS)
        res += 5 * (val[6] + val[13] + val[20]);
    return res;
}

function getTradingTime() {
    var res = 8*60;
    var bonus = role==ROLE_LOGISTICS?(5 * (val[5] + val[12])):0;
    return res + res * bonus/100;
}

function getTradingTimeStr(time) {
    var hours = Math.floor(time / 60);
    var minutes = time % 60;
    if (minutes > 0)
        return hours + "h " + minutes + "m";
    return hours + "h";
}

function getTotalAttack() {
    var res = role==ROLE_OFFENSIVE?20:role==ROLE_DEFENSIVE?25:0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 4*(val[2] + val[9] + val[16]);
    return res;
}

function getTotalDefense() {
    var res = role==ROLE_OFFENSIVE?20:role==ROLE_DEFENSIVE?25:0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 4*(val[4] + val[11] + val[18]);
    return res;
}

function getTotalHealth() {
    var res = role==ROLE_OFFENSIVE?20:role==ROLE_DEFENSIVE?25:0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 4*(val[6] + val[13] + val[20]);
    return res;
}

function getResilienceLimit() {
    var res = role==ROLE_OFFENSIVE?140:role==ROLE_DEFENSIVE?160:100;
    res += 0 * val[19]; //TODO: Inspired and Impassioned
    return res;
}

function getResilienceBattle() {
    var res = 15;
    var bonus = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        bonus = 5 * val[3] + val[17];
    return res - (res * bonus) / 100 ;
}

function getResilienceMovement() {
    var res = 1;
    var bonus = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        bonus = 5 * val[1] + val[15];
    return res - (res * bonus) / 100 ;
}

function getEnemyCasualtyRate() {
    var res = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 2*(val[5] + val[10]);
    return res;
}

function getAlliedCasualtyRate() {
    var res = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 2*(val[8]);
    else if (role == ROLE_LOGISTICS)
        res += 2*(val[15] + val[17]);
    return res;
}

function reset() {
    role = ROLE_NONE;
    val = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    $("#panelO").removeClass("disabled");
    $("#panelD").removeClass("disabled");
    $("#panelL").removeClass("disabled");
    $("#ee0").hide();
    $("#ee1").hide();
    $("#ee2").hide();
    $("#ee3").hide();
    $("#ee4").hide();
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
    if (history.pushState)
        window.history.pushState("", "", new_url);
    else
        document.location.href = new_url;
}
