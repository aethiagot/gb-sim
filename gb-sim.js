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
const linksM = [[[41,73],[42,71],[43,73],[44,71],[45,73],[46,71],[47,73],[48,71]],[[113,115],[169,113]],[[114,76],[170,74]],[[115,113],[171,115]],[[116,69],[172,71]],[[117,115],[173,113]],[[118,76],[174,74]],[[119,113],[175,115]],[[120,71],[176,69]],[[113,56],[169,58]],[[114,67],[170,69]],[[115,56],[171,58]],[[116,108],[172,110]],[[117,56],[173,58]],[[118,67],[174,69]],[[119,58],[175,56]],[[120,110],[176,108]],[[64,105],[80,114],[168,104],[193,96]],[[57,105],[73,112],[161,106],[193,96]],[[58,107],[74,112],[162,106],[194,94]],[[59,107],[75,112],[163,106],[194,94]],[[60,105],[76,134],[164,106],[195,96]],[[61,107],[77,112],[165,106],[195,94]],[[62,105],[78,112],[166,106],[196,94]],[[63,107],[79,114],[167,104],[196,94]],[[56,107],[64,73],[145,105]],[[49,109],[57,73],[146,107]],[[49,107],[57,71],[147,101]],[[50,103],[58,71],[148,99]],[[50,109],[58,73],[149,105]],[[51,107],[59,71],[150,107]],[[51,109],[59,73],[151,83]],[[52,107],[60,73],[152,107]],[[52,109],[60,71],[153,107]],[[53,109],[61,71],[154,105]],[[53,107],[61,73],[155,99]],[[54,109],[62,71],[156,101]],[[54,107],[62,73],[157,107]],[[55,109],[63,71],[158,105]],[[55,107],[63,73],[159,107]],[[56,109],[64,71],[160,105]],[[0,73],[72,132]],[[0,71],[65,134]],[[0,73],[66,134]],[[0,71],[67,132]],[[0,73],[68,132]],[[0,71],[69,128]],[[0,73],[70,132]],[[0,71],[71,132]],[[26,109],[81,69],[89,59],[97,57],[105,71],[27,107]],[[82,69],[90,59],[98,57],[106,71],[28,103],[29,109]],[[83,57],[91,71],[99,59],[107,69],[30,107],[31,109]],[[84,59],[92,69],[100,59],[108,69],[32,107],[33,109]],[[85,71],[93,57],[101,59],[109,69],[34,109],[35,107]],[[86,71],[94,57],[102,59],[110,69],[36,109],[37,107]],[[87,69],[95,59],[103,57],[111,71],[38,109],[39,107]],[[88,69],[96,59],[104,57],[112,71],[25,107],[40,109]],[[18,105],[26,73],[193,83],[27,71]],[[19,107],[194,81],[28,71],[29,73]],[[20,107],[194,83],[30,71],[31,73]],[[21,105],[195,83],[32,73],[33,71]],[[22,107],[195,81],[34,71],[35,73]],[[23,105],[196,81],[36,71],[37,73]],[[24,107],[196,83],[38,71],[39,73]],[[17,105],[193,81],[25,73],[40,71]],[[42,134],[122,77],[123,83],[137,65],[138,100],[161,132]],[[43,134],[124,81],[125,77],[138,100],[139,65],[162,134]],[[44,132],[126,77],[127,81],[139,65],[140,102],[163,134]],[[45,132],[128,81],[129,77],[140,102],[141,65],[164,134]],[[46,128],[130,85],[131,77],[141,70],[142,93],[165,137]],[[47,132],[132,81],[133,79],[142,102],[143,63],[166,134]],[[48,132],[134,77],[135,83],[143,63],[144,102],[167,134]],[[41,132],[121,77],[136,83],[137,63],[144,102],[168,134]],[[18,112]],[[19,112]],[[20,112]],[[21,134]],[[22,112]],[[23,112]],[[24,114]],[[17,114]],[[49,69]],[[50,69]],[[51,57]],[[52,59]],[[53,71]],[[54,71]],[[55,69]],[[56,69]],[[49,59]],[[50,59]],[[51,71]],[[52,69]],[[53,57]],[[54,57]],[[55,59]],[[56,59]],[[49,57]],[[50,57]],[[51,59]],[[52,59]],[[53,59]],[[54,59]],[[55,57]],[[56,57]],[[49,71]],[[50,71]],[[51,69]],[[52,69]],[[53,69]],[[54,69]],[[55,71]],[[56,71]],[[9,56],[177,71],[1,115]],[[10,67],[179,57],[2,76]],[[11,56],[181,73],[3,113]],[[12,108],[183,57],[4,69]],[[13,56],[185,71],[5,115]],[[14,67],[188,57],[6,76]],[[15,58],[189,71],[7,113]],[[16,110],[191,55],[8,71]],[[72,77],[197,70]],[[65,77],[197,72]],[[65,83],[198,79]],[[66,81],[198,77]],[[66,77],[199,72]],[[67,77],[199,72]],[[67,81],[200,77]],[[68,81],[200,79]],[[68,77],[201,70]],[[69,85],[201,72]],[[69,77],[202,79]],[[70,81],[202,77]],[[70,79],[203,72]],[[71,77],[203,70]],[[71,83],[204,79]],[[72,83],[204,77]],[[65,65],[72,63]],[[65,100],[66,100]],[[66,65],[67,65]],[[67,102],[68,102]],[[68,65],[69,70]],[[69,93],[70,102]],[[70,63],[71,63]],[[72,102],[71,102]],[[25,105],[177,66]],[[26,107],[178,68]],[[27,101],[179,59]],[[28,99],[180,61]],[[29,105],[181,68]],[[30,107],[182,66]],[[31,83],[183,100]],[[32,107],[184,59]],[[33,107],[185,66]],[[34,105],[186,68]],[[35,99],[187,61]],[[36,101],[188,61]],[[37,107],[189,66]],[[38,105],[190,68]],[[39,107],[191,59]],[[40,105],[192,61]],[[18,106],[65,132]],[[19,106],[66,134]],[[20,106],[67,134]],[[21,106],[68,134]],[[22,106],[69,137]],[[23,106],[70,134]],[[24,104],[71,134]],[[17,104],[72,134]],[[9,58],[178,73],[1,113]],[[10,69],[180,59],[2,74]],[[11,58],[182,71],[3,115]],[[12,110],[184,55],[4,71]],[[13,58],[186,73],[5,113]],[[14,69],[187,59],[6,74]],[[15,56],[190,73],[7,115]],[[16,108],[192,57],[8,69]],[[113,71],[145,66]],[[146,68],[169,73]],[[114,57],[147,59]],[[148,61],[170,59]],[[115,73],[149,68]],[[150,66],[171,71]],[[116,57],[151,100]],[[152,59],[172,55]],[[117,71],[153,66]],[[154,68],[173,73]],[[155,61],[174,59]],[[118,57],[156,61]],[[119,71],[157,66]],[[158,68],[175,73]],[[120,55],[159,59]],[[160,61],[176,57]],[[17,96],[18,96],[57,83],[64,81],[197,140]],[[19,94],[20,94],[58,81],[59,83],[199,140]],[[21,96],[22,94],[60,83],[61,81],[201,140]],[[23,94],[24,94],[62,81],[63,83],[203,142]],[[193,140],[121,70],[122,72]],[[123,79],[124,77]],[[194,140],[125,72],[126,72]],[[127,77],[128,79]],[[195,140],[129,70],[130,72]],[[131,79],[132,77]],[[196,142],[133,72],[134,70]],[[135,79],[136,77]]];
const influence = [3000,0,0,0,0,0,0,0,0,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,700,700,700,700,700,700,700,700,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,700,700,700,700,700,700,700,700,200,200,200,200,200,200,200,200,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,700,700,700,700,700,700,700,700,700,700,700,700];
const colors = ["#F1F1F1","#ff6095","#ff9641","#88ff89","#d38cf1","#ff3830","#ffc952","#56ffd2","#b2f1ff"];
var role = ROLE_NONE;
var talents = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var prev = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var map = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var score = [74200,0,0,0,0,0,0,0,0];
var names = true;
var canvas;
var ctx;
var shortestPaths;

function initialize() {
    
    window.addEventListener('contextmenu', function (e) { 
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
            if (l[j][0] != 0)
                drawMapLink(i,l[j][0]);
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
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 7;
        }
        else { //GLOW_SHORTEST
            ctx.strokeStyle = "#FFFD37";
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
        var color = map[linksM[id][i][0]];
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
    var aux = linksM[i1];
    for(var i = 0; i < aux.length; i++)
        if (aux[i][0] == i2)
            return aux[i][1];
    return Infinity
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
    if (id == 0 && map[id] == 0){
        hideTooltip();
        return;
    }
    
    var res = "";
    var shortest = [Infinity,null];
    var time = 0;
    var resmax = getResilienceMax();
    var resleft = resmax;
    
    shortestPaths = dijkstra(id);
    
    var dist = shortestPaths[map[id]][0];
    if (dist > 0 && dist < Infinity) {
        var path = rebuildPath(id,map[id]);
        time = getTime(dist,map[id]);
        resleft -= getResilienceLost(time);
        res += $("#i"+map[id]).attr("alt") + ":&nbsp;" + dist + "km, " + getTimeStr(time) + " (" + resmax + "-" + Math.max(0,resleft) + ").<br>";
        if (dist < shortest[0])
            shortest = [dist,path];
        for(var i = 1; i < path.length; i++)
            drawMapLink(path[i-1],path[i],GLOW_BASE);
    }
    
    $(".fortress").each(function() {
        var id2 = parseInt(($(this)[0].id).slice(1));
        if (id != id2 && map[id] == map[id2]){
            var dist = shortestPaths[id2][0];
            if (dist > 0 && dist < Infinity) {
                var path = rebuildPath(id,id2);
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
   
function rebuildPath(id1,id2) { 
    //Needs to compute Dijkstra previously
    var res = [];
    while(id2 != id1) {
        res.push(id2);
        id2 = shortestPaths[id2][1];
    }
    res.push(id1);
    return res.reverse();
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

function dijkstra(id) {
    var walk_blocked = (role == ROLE_DEFENSIVE && talents[21]); //We don't care about transporting routes and only defensive players can walk through enemy territory with the proper talents.
    var res = new Array(205); //distance, prev
    var fixed = new Array(205);
    var num_fixed = 0;
    var min, u, v;
    
    for (var i = 0; i < map.length; i++){
        res[i] = [Infinity,-1];
        fixed[i] = false;
    }
    res[id] = [0,id];
    
    while(num_fixed < map.length) {
        min = Infinity;
        u = 0;
        for(v = 0; v < map.length; v++)
            if (!fixed[v] && res[v][0] < min) {
                min = res[v][0];
                u = v;
            }
        fixed[u] = true;
        num_fixed++;
        for(i = 0; i < linksM[u].length; i++) {
            var weight = (!walk_blocked && (map[u] != map[linksM[u][i][0]]))?Infinity:getDistance(u,linksM[u][i][0]);
            if (!fixed[linksM[u][i][0]] && res[linksM[u][i][0]][0] > res[u][0] + weight){
                res[linksM[u][i][0]][0] = res[u][0] + weight;
                res[linksM[u][i][0]][1] = u;
            }
        }
    }
    return res;
}
