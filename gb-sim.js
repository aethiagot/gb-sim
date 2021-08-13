const WHITE = 0;      //Glory Faction
const PINK = 1;       // Shadow Faction
const ORANGE = 2;     // Lordsbane Faction
const GREEN = 3;      // Ages Faction
const PURPLE = 4;     // Tempest Faction
const RED = 5;        // Scarlet Faction
const YELLOW = 6;     // Longreach Faction
const AQUA = 7;       // Frost Faction
const BLUE = 8;       // Justice Faction
const RATIO = 0.885;

const ROLE_NONE = 0;
const ROLE_OFFENSIVE = 1;
const ROLE_DEFENSIVE = 2;
const ROLE_LOGISTICS = 3;

const GLOW_NONE = 0;
const GLOW_BASE = 1;
const GLOW_SHORTEST = 2;

const costs = [250,200,130,200,130,200,130,380,250,150,250,150,250,150,500,200,200,200,200,400,200,800];
const linksT = [null,0,0,1,2,3,4,6,7,7,8,9,10,11,13,14,14,15,16,17,18,20];
const min = [0,1,1,3,3,3,3,3,1,1,3,3,3,3,3,1,1,3,3,3,3,3];
const max = [1,5,5,5,5,5,5,1,5,5,5,5,5,5,1,5,5,5,5,5,5,1];
const linksM = [[41,42,43,44,45,46,47,48],[113,169],[114,170],[115,171],[116,172],[117,173],[118,174],[119,175],[120,176],[113,169],[114,170],[115,171],[116,172],[117,173],[118,174],[119,175],[120,176],[64,80,168,193],[57,73,161,193],[58,74,162,194],[59,75,163,194],[60,76,164,195],[61,77,165,195],[62,78,166,196],[63,79,167,196],[64,145,56],[57,146,49],[57,147,49],[58,148,50],[58,149,50],[59,150,51],[59,151,51],[60,152,52],[60,153,52],[61,154,53],[61,155,53],[62,156,54],[62,157,54],[63,158,55],[63,159,55],[64,160,56],[0,72],[0,65],[0,66],[0,67],[0,68],[0,69],[0,70],[0,71],[26,27,81,89,97,105],[28,29,82,90,98,106],[30,31,83,91,99,107],[32,33,84,92,100,108],[34,35,85,93,101,109],[36,37,86,94,102,110],[38,39,87,95,103,111],[25,40,88,96,104,112],[18,26,27,193],[19,28,29,194],[20,30,31,194],[21,32,33,195],[22,34,35,195],[23,36,37,196],[24,38,39,196],[17,25,40,193],[122,123,137,138,161,42],[124,125,138,139,162,43],[126,127,139,140,163,44],[128,129,140,141,164,45],[130,131,141,142,165,46],[132,133,142,143,166,47],[134,135,143,144,167,48],[121,136,137,144,168,41],[18],[19],[20],[21],[22],[23],[24],[17],[49],[50],[51],[52],[53],[54],[55],[56],[49],[50],[51],[52],[53],[54],[55],[56],[49],[50],[51],[52],[53],[54],[55],[56],[49],[50],[51],[52],[53],[54],[55],[56],[1,9,177],[2,10,179],[3,11,181],[4,12,183],[5,13,185],[6,14,188],[7,15,189],[8,16,191],[72,197],[65,197],[65,198],[66,198],[66,199],[67,199],[67,200],[68,200],[68,201],[69,201],[69,202],[70,202],[70,203],[71,203],[71,204],[72,204],[65,72],[65,66],[66,67],[67,68],[68,69],[69,70],[70,71],[71,72],[25,177],[26,178],[27,179],[28,180],[29,181],[30,182],[31,183],[32,184],[33,185],[34,186],[35,187],[36,188],[37,189],[38,190],[39,191],[40,192],[18,65],[19,66],[20,67],[21,68],[22,69],[23,70],[24,71],[17,72],[1,9,178],[2,10,180],[3,11,182],[4,12,184],[5,13,186],[6,14,187],[7,15,190],[8,16,192],[113,145],[146,169],[114,147],[148,170],[115,149],[171,150],[116,151],[152,172],[117,153],[154,173],[155,174],[118,156],[119,157],[158,175],[120,159],[160,176],[17,18,57,64,197],[19,20,58,59,199],[21,22,60,61,201],[23,24,62,63,203],[121,122,193],[123,124],[125,126,194],[127,128],[129,130,195],[131,132],[133,134,196],[135,136]];
const influence = [3000,0,0,0,0,0,0,0,0,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,700,700,700,700,700,700,700,700,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,700,700,700,700,700,700,700,700,200,200,200,200,200,200,200,200,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,700,700,700,700,700,700,700,700,700,700,700,700];
const colors = ["#F1F1F1","#DE517B","#E9823F","#84EB86","#CE7ED6","#E4222E","#F1BF4A","#7BEBD6","#9FD5FC"];
    
var role = ROLE_NONE;
var talents = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var prev = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var map = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var score = [74200,0,0,0,0,0,0,0,0];
var names = true;
var canvas;
var ctx;

function initialize() {
    
    window.addEventListener('ctxmenu', function (e) { 
        e.preventDefault(); 
    }, false);
    
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    const idx = document.URL.indexOf('?');
    if (idx != -1) {
        var imports = (document.URL.substring(idx+1,document.URL.length)).split("&");
        if (imports == null || imports.length < 2)
            return;
        var aux;
        
        /* Talents */
        imports[0] = imports[0].slice(2);
        role = parseInt(imports[0][0]);
        for(var i = 1; i < imports[0].length; i++) {
            var j = parseInt(imports[0][i]);
            while(j > 0) {
                addTalent(role,i-1);
                j--;
            }
        }
        /* Map */
        imports[1] = imports[1].slice(2);
        for(var i = 0; i < imports[1].length; i++) {
            var j = parseInt(imports[1][i]);
            score[map[i]] -= influence[i];
            map[i] = j;
            score[map[i]] += influence[i];
            refreshBuilding(i);
        }
    }
    updateTalentsData();
    refreshCanvas();
}

function updateTalentsData() {
    const role_char = role==ROLE_OFFENSIVE?'o':role==ROLE_DEFENSIVE?'d':role==ROLE_LOGISTICS?'l':'';
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
    for(var i = 0; i < talents.length; i++)
        res+= talents[i]*costs[i];
    return res;
}

function getQueues() {
    return 2 + talents[0] + talents[7] + talents[14];
}

function getMarchingSpeed() {
    return role==ROLE_OFFENSIVE?30:0;
}

function getArmySize() {
    return (role==ROLE_OFFENSIVE || role==ROLE_DEFENSIVE)?(20000 * talents[12]):0;
}

function getTransportCapacity() {
    var res = 120000; //Default Transport Capacity
    var bonus = role==ROLE_LOGISTICS?(4 * (talents[3] + talents[4] + talents[10] + talents[11] + talents[18])):0;
    return res + res*bonus/100;
}

function getTransportSpeed() {
    return role==ROLE_LOGISTICS?(4 * (talents[1] + talents[2] + talents[8] + talents[9] + talents[16])):0;
}

function getTradingEfficiency() {
    var res = role==ROLE_OFFENSIVE?-50:role==ROLE_LOGISTICS?30:0;
    if (role == ROLE_LOGISTICS)
        res += 5 * (talents[6] + talents[13] + talents[20]);
    return res;
}

function getTradingTime() {
    var res = 8*60;
    var bonus = role==ROLE_LOGISTICS?(5 * (talents[5] + talents[12])):0;
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
        res += 4*(talents[2] + talents[9] + talents[16]);
    return res;
}

function getTotalDefense() {
    var res = role==ROLE_OFFENSIVE?20:role==ROLE_DEFENSIVE?25:0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 4*(talents[4] + talents[11] + talents[18]);
    return res;
}

function getTotalHealth() {
    var res = role==ROLE_OFFENSIVE?20:role==ROLE_DEFENSIVE?25:0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 4*(talents[6] + talents[13] + talents[20]);
    return res;
}

function getResilienceLimit() {
    var res = role==ROLE_OFFENSIVE?140:role==ROLE_DEFENSIVE?160:100;
    var bonus = 4 * talents[19];
    return res + res * bonus/100;
}

function getResilienceBattle() {
    var res = 15;
    var bonus = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        bonus = 5 * talents[3] + talents[17];
    return res - (res * bonus) / 100 ;
}

function getResilienceMovement() {
    var res = 1;
    var bonus = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        bonus = 5 * talents[1] + talents[15];
    return res - (res * bonus) / 100 ;
}

function getEnemyCasualtyRate() {
    var res = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 2*(talents[5] + talents[10]);
    return res;
}

function getAlliedCasualtyRate() {
    var res = 0;
    if (role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        res += 2*(talents[8]);
    else if (role == ROLE_LOGISTICS)
        res += 2*(talents[15] + talents[17]);
    return res;
}

function resetTalents() {
    role = ROLE_NONE;
    talents = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
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
    updateTalentsData();
}

function checkDependencies(id) {
    for(var i = 1; i < linksT.length; i++)
        if ((linksT[i] == id) && (talents[i] > 0) && (talents[id] <= min[i]))
            return false;
    return true;
}

function checkEdges(id) {
    for(var i = 1; i < linksT.length; i++)
        if ((linksT[i] == id) && (talents[id] < min[i]))
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
    if ((talents[id] < max[id]) && (id == 0 || talents[linksT[id]] >= min[id])) {
        var mode_char = checkRole(mode);
        if (mode_char == null)
            return;
        talents[id]++;
        $("#" + mode_char + id).removeClass("disabled");
        $("#V" + mode_char + id).text(talents[id]);
        if (checkEdges(id))
            $("#E" + mode_char + id).removeClass("disabled");
        updateTalentsData();
    }
}

function removeTalent(mode,id) {
    if ((talents[id] > 0) && checkDependencies(id)) {
        var mode_char = checkRole(mode);
        if (mode_char == null)
            return;
        talents[id]--;
        if (talents[id] == 0)
            $("#" + mode_char + id).addClass("disabled");
        $("#V" + mode_char + id).text(talents[id]);
        if (!checkEdges(id))
            $("#E" + mode_char + id).addClass("disabled");
        if (id == 0 && talents[id] == 0)
            resetTalents();
        updateTalentsData();
    }
}

/*** MAP ***/
function toggleMapNames() {
    if (names)
        $("#bNamesMap").html("Show Names");
    else
        $("#bNamesMap").html("Hide Names");
    names = !names;
    refreshCanvas();
}

function refreshCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var i = 0; i < linksM.length; i++) {
        var l = linksM[i];
        for (var j = 0; j < l.length; j++)
            if (l[j] != 0)
                drawMapLink(i,l[j]);
    }
    if (names)
        for(var i = 0; i < map.length; i++)
            drawMapName(i);
}

function drawMapName(id) {
    var ele = $("#i"+id);
    var pos = ele.position();
    var w = ele.width();
    var h = ele.height();
    var str = ele.attr("alt");
    var mod = 10;
    if (id == GREEN || id == PURPLE || id == RED)
        mod = 3;
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.strokeText(str, pos.left+w/2,pos.top+h+mod);
    //ctx.fillStyle = colors[map[id]]; //Owner's color
    ctx.fillStyle = "#FFFFFF"; // White
    ctx.fillText(str, pos.left+w/2,pos.top+h+mod);
}

function getColor(i1,i2) {
    if (map[i1] == map[i2]) 
        return colors[map[i1]];
    return "#F1F1F1";
}

function drawMapLink(i1, i2, glow) { //glow is optional to mark shortest paths
    var ele1 = $("#i"+i1);
    var ele2 = $("#i"+i2);
    var pos1 = ele1.position();
    var pos2 = ele2.position();
    var w1 = ele1.width();
    var w2 = ele2.width();
    var h1 = ele1.height();
    var h2 = ele2.height();
    
    ctx.beginPath();
    ctx.strokeStyle = "#202020";
    ctx.lineWidth = 5;
    ctx.moveTo(pos1.left + w1/2,pos1.top + h1/2);
    ctx.lineTo(pos2.left + w2/2, pos2.top + h2/2);
    ctx.stroke();
    if (glow > GLOW_NONE){ 
        //Not using shadowBlur, it's too light
        //ctx.shadowBlur = 4;
        //ctx.shadowColor = "#FFFFFF";
        if (glow == GLOW_BASE){
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 11;
        }
        else { //GLOW_SHORTEST
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 7;
        }
        ctx.moveTo(pos1.left + w1/2,pos1.top + h1/2);
        ctx.lineTo(pos2.left + w2/2, pos2.top + h2/2);
        ctx.stroke();
    }
    ctx.strokeStyle = getColor(i1,i2);
    ctx.lineWidth = 3;
    ctx.moveTo(pos1.left + w1/2,pos1.top + h1/2);
    ctx.lineTo(pos2.left + w2/2, pos2.top + h2/2);
    ctx.stroke();
}

function getNextColor(id) {
    var res = []
    for(var i = 0; i < linksM[id].length; i++){
        var color = map[linksM[id][i]];
        if (color != map[id] && color > prev[id] && res.indexOf(color) == -1){
            res.push(color);
        }
    }
    res.sort();
    if (res.length == 0) {
        prev[id] = 0;
        return 0;
    }
    else {
        prev[id] = res[0];
        return res[0];
    }
}

function refreshBuilding(id) {
    var ele = $("#i" + id);
    var src = ele.attr('src').split('');
    src[10] = map[id]; //TODO: dymamic
    src = src.join('');
    ele.attr('src',src);
}

function resetMap() {
    for(var i = 9; i < map.length; i++) {
        map[i] = 0;
        prev[i] = 0;
        refreshBuilding(i);
    }
    map[0] = 0;
    prev[0] = 0;
    refreshBuilding(0);
    updateURL();
    refreshCanvas();
}

function attack(id) {
    score[map[id]] -= influence[id];
    map[id] = getNextColor(id);
    score[map[id]] += influence[id];
    refreshBuilding(id)
    updateURL();
    refreshCanvas();
    showTooltip(id);
}

function getDistance(i1,i2) {
    var ele1 = $("#i"+i1);
    var ele2 = $("#i"+i2);
    var x1 = ele1.position().left + (ele1.width() / 2);
    var x2 = ele2.position().left + (ele2.width() / 2);;
    var y1 = ele1.position().top + (ele1.height() / 2);
    var y2 = ele2.position().top + (ele2.height() / 2);
    return Math.trunc((Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2)))/RATIO);
}

function getPathDistance(path) {
    var res = 0;
    if (path.length > 0) {
        for(var i = 1; i < path.length; i++) {
            res += getDistance(path[i-1],path[i]);
        }
    }
    return res;
}

function getSpeedBonus(faction) {
    var bonus = 0;
    
    //Map bonus
    var elems = document.getElementsByClassName("tack");
    for (var i = 0; i < elems.length; i++) {
        var id2 = parseInt((elems[i].id).slice(1));
        if (map[id2] == faction)
            bonus += 10;
    }
    
    //Talent bonus
    if(role == ROLE_OFFENSIVE || role == ROLE_DEFENSIVE)
        bonus += 5 * (talents[1] + talents[15]);
    return bonus;
}

function getResilienceMax(){
    var res = 100;
    if(role == ROLE_OFFENSIVE)
        res = 140;
    else if (role == ROLE_DEFENSIVE)
        res = 160;
    var bonus = 4 * talents[19];
    return res + res * bonus/100;
}

function getResilienceLost(time) {
    return Math.trunc(time/5);
}

function getTime(distance,faction) {
    var modifier = 1 + (getSpeedBonus(faction)/100);
    return (distance / modifier);
}

function getTimeStr(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.trunc(time % 60);
    if (seconds > 0)
        return minutes + ":" + ((seconds<10)?"0":"") + seconds;
    return minutes + "m";
}

function showTooltip(id) {
    var res = "";
    var shortest = [Infinity,null];
    var base = [];
    
    var dist = 0;
    var time = 0;
    var path = [];
    var resmax = getResilienceMax();
    var resleft = resmax;
    if (map[0] == map[id]){ //Guessing you can deploy from the Glorious City and current faction owns it
        path = findPath(id,0);
        dist = (Math.round(getPathDistance(path) * 100 + Number.EPSILON ) / 100);
        if (dist > 0) {
            time = getTime(dist,map[id]);
            resleft -= getResilienceLost(time);
            res += $("#i0").attr("alt") + ":&nbsp;" + dist + "km, " + getTimeStr(time) + " (" + resmax + "-" + Math.max(0,resleft) + ").<br>";
            if (dist < shortest[0])
                shortest = [dist,path];
        }
    }
    if (map[id] != 0) { //Building is owned by a players' faction so we compute the shortest distance from base and draw its path outlined in black
        path = findPath(id,map[id]);
        dist = (Math.round(getPathDistance(path) * 100 + Number.EPSILON ) / 100);
        if (dist > 0) {
            time = getTime(dist,map[id]);
            resleft -= getResilienceLost(time);
            res += $("#i"+map[id]).attr("alt") + ":&nbsp;" + dist + "km, " + getTimeStr(time) + " (" + resmax + "-" + Math.max(0,resleft) + ").<br>";
            if (dist < shortest[0])
                shortest = [dist,path];
            for(var i = 1; i < path.length; i++)
                drawMapLink(path[i-1],path[i],GLOW_BASE);
        }
    }
    $(".fortress").each(function() {
        var id2 = parseInt(($(this)[0].id).slice(1));
        if (id != id2 && map[id] == map[id2]){
            var path = findPath(id,id2);
            var dist = (Math.round(getPathDistance(path) * 100 + Number.EPSILON ) / 100);
            if (dist > 0) {
                var time = getTime(dist,map[id]);
                var resmax = getResilienceMax();
                var resleft = resmax - getResilienceLost(time);
                res += $(this).attr("alt") + ":&nbsp;" + dist + "km, " + getTimeStr(time) + " (" + resmax + "-" + Math.max(0,resleft) + ").<br>";
                if (dist < shortest[0])
                    shortest = [dist,path];
            }
            
        }
    });
    if (res == "")
        res = "No path available for current<br>owner and talent settings."
    else { //Draw shortest path outlined in white
        for(var i = 1; i < shortest[1].length; i++)
            drawMapLink(shortest[1][i-1],shortest[1][i],GLOW_SHORTEST);
    }
    $("#tData").html(res);
    $("#tContainer").show();
    $("#tData").show();
    var h = $("#tData").height();
    var w = $("#tData").width();
    $("#tContainer").css('top', ($("#i" + id).position().top - h + 50) +"px");
    $("#tContainer").css('left',($("#i" + id).position().left - (w/2)) + "px");
}

function hideTooltip() {
    $("#tContainer").hide();
    $("#tData").hide();
    refreshCanvas();
}
   
function findPath(id1,id2) { 
    //var walk_blocked = ((role == ROLE_DEFENSIVE) && talents[21]);
    //Guessing they did a simple BFS search and not Dijkstra
    var res = [[id1]];
    var visited = [];
    var found = false;
    
    while(res.length > 0 && !found) {
        var aux = res.shift();
        var last = aux[aux.length - 1];
        visited.push(last);
        var neighbors = linksM[last];
        for(var i = 0; i < neighbors.length; i++){
            if ((map[neighbors[i]] == map[id1]) && (visited.indexOf(neighbors[i]) == -1)) {
                if (neighbors[i] == id2){
                    aux.push(id2);
                    found = true;
                    break; 
                }
                var aux2 = [...aux];
                aux2.push(neighbors[i]);
                res.push(aux2);
            }
        }
    }
    return aux.reverse();
}

function updateURL() {
    var url_export_t = getTalentsId();
    var url_export_m = getMapId();
    var url = new URL(document.URL.toString());
    var query_string = url.search;
    var search_params = new URLSearchParams(query_string); 
    search_params.set('t', url_export_t);
    search_params.set('m', url_export_m);
    url.search = search_params.toString();
    var new_url = url.toString();
    if (history.pushState)
        window.history.pushState("", "", new_url);
    else
        document.location.href = new_url;
}

function getTalentsId() {
    var res = "" + role;
    for(var i = 0; i < talents.length; i++)
        res += talents[i];
    return res;
}

function getMapId() {
    var res = "";
    for(var i = 0; i < map.length; i++)
        res += map[i];
    return res;
}
