/*
    Glorious Battle K265's simulator
    Copyright (C) 2021  [BoL] Aethia

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    
    No copyright infringement intended, some text descriptions and 
    all images belong to the rightful owners.
*/

const WHITE = 0;      // Glory Faction
const PINK = 1;       // Shadow Faction
const ORANGE = 2;     // Lordsbane Faction
const GREEN = 3;      // Tempest Faction
const PURPLE = 4;     // Ages Faction
const RED = 5;        // Scarlet Faction
const YELLOW = 6;     // Longreach Faction
const AQUA = 7;       // Frost Faction
const BLUE = 8;       // Justice Faction

const ROLE_NONE = 0;
const ROLE_OFFENSIVE = 1;
const ROLE_DEFENSIVE = 2;
const ROLE_LOGISTICS = 3;

const GLOW_NONE = 0;
const GLOW_BASE = 1;
const GLOW_SHORTEST = 2;

const costs = [150,100,100,100,100,150,100,200,150,120,150,120,200,120,250,150,150,150,150,250,150,300];
const influence = [
    3000,0,0,0,0,0,0,0,0, //Cities
    200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200, //Caravans
    400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400, //Faction Gates
    400,400,400,400,400,400,400,400, //Glory Gates
    700,700,700,700,700,700,700,700,200,200,200,200,200,200,200,200,700,700,700,700,700,700,700,700, //Fortresses
    200,200,200,200,200,200,200,200, //Potion Depots
    200,200,200,200,200,200,200,200, //Armor Depots
    200,200,200,200,200,200,200,200, //Weapon Depots
    200,200,200,200,200,200,200,200, //Tack Depots
    200,200,200,200,200,200,200,200, //Herb Depots
    200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200, //Small Merchants
    400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400, //Medium Merchants
    700,700,700,700,700,700,700,700, //Large Mercahnts
    200,200,200,200,200,200,200,200, //Small Military
    400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400, //Medium Military
    700,700,700,700,700,700,700,700,700,700,700,700 //Large Military
    ];
const linksM = [[[41,73],[42,71],[43,73],[44,71],[45,73],[46,71],[47,73],[48,71]],[[113,115],[169,113]],[[114,76],[170,74]],[[115,113],[171,115]],[[116,69],[172,71]],[[117,115],[173,113]],[[118,76],[174,74]],[[119,113],[175,115]],[[120,71],[176,69]],[[113,56],[169,58]],[[114,67],[170,69]],[[115,56],[171,58]],[[116,108],[172,110]],[[117,56],[173,58]],[[118,67],[174,69]],[[119,58],[175,56]],[[120,110],[176,108]],[[64,105],[80,114],[168,104],[193,96]],[[57,105],[73,112],[161,106],[193,96]],[[58,107],[74,112],[162,106],[194,94]],[[59,107],[75,112],[163,106],[194,94]],[[60,105],[76,134],[164,106],[195,96]],[[61,107],[77,112],[165,106],[195,94]],[[62,105],[78,112],[166,106],[196,94]],[[63,107],[79,114],[167,104],[196,94]],[[56,107],[64,73],[145,105]],[[49,109],[57,73],[146,107]],[[49,107],[57,71],[147,101]],[[50,107],[58,71],[148,99]],[[50,109],[58,73],[149,105]],[[51,107],[59,71],[150,107]],[[51,109],[59,73],[151,83]],[[52,107],[60,73],[152,107]],[[52,109],[60,71],[153,107]],[[53,109],[61,71],[154,105]],[[53,107],[61,73],[155,99]],[[54,109],[62,71],[156,101]],[[54,107],[62,73],[157,107]],[[55,109],[63,71],[158,105]],[[55,107],[63,73],[159,107]],[[56,109],[64,71],[160,105]],[[0,73],[72,132]],[[0,71],[65,134]],[[0,73],[66,134]],[[0,71],[67,132]],[[0,73],[68,132]],[[0,71],[69,128]],[[0,73],[70,132]],[[0,71],[71,132]],[[26,109],[81,69],[89,59],[97,57],[105,71],[27,107]],[[82,69],[90,59],[98,57],[106,71],[28,107],[29,109]],[[83,57],[91,71],[99,59],[107,69],[30,107],[31,109]],[[84,59],[92,69],[100,59],[108,69],[32,107],[33,109]],[[85,71],[93,57],[101,59],[109,69],[34,109],[35,107]],[[86,71],[94,57],[102,59],[110,69],[36,109],[37,107]],[[87,69],[95,59],[103,57],[111,71],[38,109],[39,107]],[[88,69],[96,59],[104,57],[112,71],[25,107],[40,109]],[[18,105],[26,73],[193,83],[27,71]],[[19,107],[194,81],[28,71],[29,73]],[[20,107],[194,83],[30,71],[31,73]],[[21,105],[195,83],[32,73],[33,71]],[[22,107],[195,81],[34,71],[35,73]],[[23,105],[196,81],[36,71],[37,73]],[[24,107],[196,83],[38,71],[39,73]],[[17,105],[193,81],[25,73],[40,71]],[[42,134],[122,77],[123,83],[137,65],[138,100],[161,132]],[[43,134],[124,81],[125,77],[138,100],[139,65],[162,134]],[[44,132],[126,77],[127,81],[139,65],[140,102],[163,134]],[[45,132],[128,81],[129,77],[140,102],[141,65],[164,134]],[[46,128],[130,85],[131,77],[141,70],[142,93],[165,137]],[[47,132],[132,81],[133,79],[142,102],[143,63],[166,134]],[[48,132],[134,77],[135,83],[143,63],[144,102],[167,134]],[[41,132],[121,77],[136,83],[137,63],[144,102],[168,134]],[[18,112]],[[19,112]],[[20,112]],[[21,134]],[[22,112]],[[23,112]],[[24,114]],[[17,114]],[[49,69]],[[50,69]],[[51,57]],[[52,59]],[[53,71]],[[54,71]],[[55,69]],[[56,69]],[[49,59]],[[50,59]],[[51,71]],[[52,69]],[[53,57]],[[54,57]],[[55,59]],[[56,59]],[[49,57]],[[50,57]],[[51,59]],[[52,59]],[[53,59]],[[54,59]],[[55,57]],[[56,57]],[[49,71]],[[50,71]],[[51,69]],[[52,69]],[[53,69]],[[54,69]],[[55,71]],[[56,71]],[[9,56],[177,71],[1,115]],[[10,67],[179,57],[2,76]],[[11,56],[181,73],[3,113]],[[12,108],[183,57],[4,69]],[[13,56],[185,71],[5,115]],[[14,67],[188,57],[6,76]],[[15,58],[189,71],[7,113]],[[16,110],[191,55],[8,71]],[[72,77],[197,70]],[[65,77],[197,72]],[[65,83],[198,79]],[[66,81],[198,77]],[[66,77],[199,72]],[[67,77],[199,72]],[[67,81],[200,77]],[[68,81],[200,79]],[[68,77],[201,70]],[[69,85],[201,72]],[[69,77],[202,79]],[[70,81],[202,77]],[[70,79],[203,72]],[[71,77],[203,70]],[[71,83],[204,79]],[[72,83],[204,77]],[[65,65],[72,63]],[[65,100],[66,100]],[[66,65],[67,65]],[[67,102],[68,102]],[[68,65],[69,70]],[[69,93],[70,102]],[[70,63],[71,63]],[[72,102],[71,102]],[[25,105],[177,66]],[[26,107],[178,68]],[[27,101],[179,59]],[[28,99],[180,61]],[[29,105],[181,68]],[[30,107],[182,66]],[[31,83],[183,100]],[[32,107],[184,59]],[[33,107],[185,66]],[[34,105],[186,68]],[[35,99],[187,61]],[[36,101],[188,61]],[[37,107],[189,66]],[[38,105],[190,68]],[[39,107],[191,59]],[[40,105],[192,61]],[[18,106],[65,132]],[[19,106],[66,134]],[[20,106],[67,134]],[[21,106],[68,134]],[[22,106],[69,137]],[[23,106],[70,134]],[[24,104],[71,134]],[[17,104],[72,134]],[[9,58],[178,73],[1,113]],[[10,69],[180,59],[2,74]],[[11,58],[182,71],[3,115]],[[12,110],[184,55],[4,71]],[[13,58],[186,73],[5,113]],[[14,69],[187,59],[6,74]],[[15,56],[190,73],[7,115]],[[16,108],[192,57],[8,69]],[[113,71],[145,66]],[[146,68],[169,73]],[[114,57],[147,59]],[[148,61],[170,59]],[[115,73],[149,68]],[[150,66],[171,71]],[[116,57],[151,100]],[[152,59],[172,55]],[[117,71],[153,66]],[[154,68],[173,73]],[[155,61],[174,59]],[[118,57],[156,61]],[[119,71],[157,66]],[[158,68],[175,73]],[[120,55],[159,59]],[[160,61],[176,57]],[[17,96],[18,96],[57,83],[64,81],[197,140]],[[19,94],[20,94],[58,81],[59,83],[199,140]],[[21,96],[22,94],[60,83],[61,81],[201,140]],[[23,94],[24,94],[62,81],[63,83],[203,142]],[[193,140],[121,70],[122,72]],[[123,79],[124,77]],[[194,140],[125,72],[126,72]],[[127,77],[128,79]],[[195,140],[129,70],[130,72]],[[131,79],[132,77]],[[196,142],[133,72],[134,70]],[[135,79],[136,77]]];
const linksT = [null,0,0,1,2,3,4,6,7,7,8,9,10,11,13,14,14,15,16,17,18,20];
const min = [0,1,1,3,3,3,3,3,1,1,3,3,3,3,3,1,1,3,3,3,3,3];
const max = [1,5,5,5,5,5,5,1,5,5,5,5,5,5,1,5,5,5,5,5,5,1];
const colors = ["#F1F1F1","#ff6095","#ff9641","#88ff89","#d38cf1","#ff3830","#ffc952","#56ffd2","#b2f1ff"];
const factions = ["Glory Faction", "Shadow Faction", "Lordsbane Faction", "Tempest Faction", "Ages Faction", "Scarlet Faction", "Longreach Faction", "Frost Faction", "Justice Faction"];

var role = ROLE_NONE;
var talents = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var prev = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var map = [0,1,2,3,4,5,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var score = [74200,0,0,0,0,0,0,0,0];
var show_names = true;
var show_distances = false;
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
    updateFactionsData();
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

function updateFactionsData() {
    var winners = getWinners();
    
    for (var i = 0; i < winners[0].length; i++) {
        $("#data_influence_faction_" + i).text(factions[winners[0][i]]);
        $("#data_influence_faction_" + i).css('color',colors[winners[0][i]]);
        $("#data_influence_points_" + i).text((winners[1][i]).toLocaleString());
    }
    
    if (winners[1][1] > 0) {
        $("#faction_2nd").show();
        $("#faction_2nd").show();
    }
    else {
        $("#faction_2nd").hide();
        $("#faction_2nd").hide();
    }
        
    if (winners[1][2] > 0) {
        $("#faction_3rd").show();
        $("#faction_3rd").show();
    }
    else {
        $("#faction_3rd").hide();
        $("#faction_3rd").hide();
    }
}

function getWinners() {
    var scowin = [ 0, 0, 0 ];
    var scofac = [ 0, 0, 0 ];
    
    for(var i = 1; i < score.length; i++){
        if (score[i] > scowin[0]) {
            scowin[2] = scowin[1];
            scofac[2] = scofac[1];
            
            scowin[1] = scowin[0];
            scofac[1] = scofac[0];
            
            scowin[0] = score[i];
            scofac[0] = i;
        }
        else if (score[i] > scowin[1]) {
            scowin[2] = scowin[1];
            scofac[2] = scofac[1];
            
            scowin[1] = score[i];
            scofac[1] = i;
        }
        else if (score[i] > scowin[2]) {
            scowin[2] = score[i];
            scofac[2] = i;
        }
    }
    return [ scofac, scowin ];
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
function toggleMapDistances() {
    if (!show_distances) {
        $("#bDistancesMap1").html("Hide Distances");
        $("#bDistancesMap2").html("Hide Distances");
    }
    else {
        $("#bDistancesMap1").html("Show Distances");
        $("#bDistancesMap2").html("Show Distances");
    }
    show_distances = !show_distances;
    refreshCanvas();
}

function toggleMapNames() {
    if (!show_names){
        $("#bNamesMap1").html("Hide Names");
        $("#bNamesMap2").html("Hide Names");
    }
    else {
        $("#bNamesMap1").html("Show Names");
        $("#bNamesMap2").html("Show Names");
    }
    show_names = !show_names;
    refreshCanvas();
}

function refreshCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var i = 0; i < linksM.length; i++) {
        var l = linksM[i];
        for (var j = 0; j < l.length; j++)
            if (l[j][0] != 0)
                drawMapLink(i,l[j][0],GLOW_NONE);
    }
    if (show_names)
        for(var i = 0; i < map.length; i++)
            drawMapName(i);
}

function getColor(i1,i2) {
    if (map[i1] == map[i2]) 
        return colors[map[i1]];
    return "#F1F1F1";
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

function drawMapLink(i1, i2, glow) { //glow is optional to mark shortest paths
    if (glow == GLOW_NONE && i1 != 0 && i2 > i1) //To avoid drawing default paths twice
        return;
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
    ctx.moveTo(pos1.left + w1/2, pos1.top + h1/2);
    ctx.lineTo(pos2.left + w2/2, pos2.top + h2/2);
    
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
    
    if (glow == GLOW_NONE && show_distances) {
        ctx.save();
        ctx.font = "10px Sans-serif";
        ctx.textAlign = "center";
        
        var dx = (pos2.left - pos1.left);
        var dy = (pos2.top - pos1.top);
        var str = getDistance(i1,i2);
        var modx = 0;
        var mody = 0;
        
        var min = Math.min(i1,i2);
        
        switch(min) { //Fast hack to avoid banners hiding distances
            case 0: // Glory banner
                modx = dx>0?0:-10;
                mody = dy>0?0:-15;
                break;
            case 1: // Shadow banner
                modx = 15;
                mody = 15;
                break;
            case 2: // Lordsbane banner
                modx = 10;
                mody = dy>0?0:20;
                break;
            case 3: // Tempest banner
                modx = 10;
                mody = 5;
                break;
            case 4: // Ages banner
                modx = 10;
                mody = -8;
                break;
            case 5: // Scarlet banner
                modx = 5;
                mody = 10;
                break;
            case 6: // Longreach banner
                modx = 10;
                mody = dy>0?0:20;
                break;
            case 7: // Frost banner
                modx = 5;
                mody = 15;
                break;
            case 8: // Justice banner
                modx = 10;
                mody = 20;
                break;
            default: 
                break;
        }
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.strokeText(str, pos1.left + dx/2 + w1/2 + modx, pos1.top + dy/2 + h1/2 + mody);
        ctx.fillStyle = "#FFFF00";
        ctx.fillText(str, pos1.left + dx/2 + w1/2 + modx, pos1.top + dy/2 + h1/2 + mody);
        ctx.restore();
    }
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

function randomMap() {
    resetMap();
    var conquered = [1,2,3,4,5,6,7,8];
    var faction = 1;
    var rnd;
    var linksS = [[41,42,43,44,45,46,47,48],[113,169],[114,170],[115,171],[116,172],[117,173],[118,174],[119,175],[120,176],[113,169],[114,170],[115,171],[116,172],[117,173],[118,174],[119,175],[120,176],[64,80,168,193],[57,73,161,193],[58,74,162,194],[59,75,163,194],[60,76,164,195],[61,77,165,195],[62,78,166,196],[63,79,167,196],[64,145,56],[57,146,49],[57,147,49],[58,148,50],[58,149,50],[59,150,51],[59,151,51],[60,152,52],[60,153,52],[61,154,53],[61,155,53],[62,156,54],[62,157,54],[63,158,55],[63,159,55],[64,160,56],[0,72],[0,65],[0,66],[0,67],[0,68],[0,69],[0,70],[0,71],[26,27,81,89,97,105],[28,29,82,90,98,106],[30,31,83,91,99,107],[32,33,84,92,100,108],[34,35,85,93,101,109],[36,37,86,94,102,110],[38,39,87,95,103,111],[25,40,88,96,104,112],[18,26,27,193],[19,28,29,194],[20,30,31,194],[21,32,33,195],[22,34,35,195],[23,36,37,196],[24,38,39,196],[17,25,40,193],[122,123,137,138,161,42],[124,125,138,139,162,43],[126,127,139,140,163,44],[128,129,140,141,164,45],[130,131,141,142,165,46],[132,133,142,143,166,47],[134,135,143,144,167,48],[121,136,137,144,168,41],[18],[19],[20],[21],[22],[23],[24],[17],[49],[50],[51],[52],[53],[54],[55],[56],[49],[50],[51],[52],[53],[54],[55],[56],[49],[50],[51],[52],[53],[54],[55],[56],[49],[50],[51],[52],[53],[54],[55],[56],[1,9,177],[2,10,179],[3,11,181],[4,12,183],[5,13,185],[6,14,188],[7,15,189],[8,16,191],[72,197],[65,197],[65,198],[66,198],[66,199],[67,199],[67,200],[68,200],[68,201],[69,201],[69,202],[70,202],[70,203],[71,203],[71,204],[72,204],[65,72],[65,66],[66,67],[67,68],[68,69],[69,70],[70,71],[71,72],[25,177],[26,178],[27,179],[28,180],[29,181],[30,182],[31,183],[32,184],[33,185],[34,186],[35,187],[36,188],[37,189],[38,190],[39,191],[40,192],[18,65],[19,66],[20,67],[21,68],[22,69],[23,70],[24,71],[17,72],[1,9,178],[2,10,180],[3,11,182],[4,12,184],[5,13,186],[6,14,187],[7,15,190],[8,16,192],[113,145],[146,169],[114,147],[148,170],[115,149],[171,150],[116,151],[152,172],[117,153],[154,173],[155,174],[118,156],[119,157],[158,175],[120,159],[160,176],[17,18,57,64,197],[19,20,58,59,199],[21,22,60,61,201],[23,24,62,63,203],[121,122,193],[123,124],[125,126,194],[127,128],[129,130,195],[131,132],[133,134,196],[135,136]];
    while(conquered.length < 205) {
        faction = (Math.round(Math.random() * 100)%8) + 1;
        rnd = Math.round(Math.random() * 100)%(linksS[faction].length);
        var id = linksS[faction][rnd];
        linksS[faction].splice(rnd,1);
        if (map[id] == WHITE){
            score[map[id]] -= influence[id];
            map[id] = getNextColor(id);
            score[map[id]] += influence[id];
            refreshBuilding(id)
            conquered.push(id);
            (linksS[faction]).push(...linksS[id]);
            linksS[id] = [];
            updateFactionsData();
        }
    }
    refreshCanvas();
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
    refreshBuilding(id);
    updateFactionsData();
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
    var bonus = (role == ROLE_OFFENSIVE)?30:0;
    
    //Map bonus
    var elems = document.getElementsByClassName("tack");
    for (var i = 0; i < elems.length; i++) {
        var id2 = parseInt((elems[i].id).slice(1));
        if (map[id2] == faction)
            bonus += 10;
    }
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
    //Talent bonus
    var bonus = getResilienceMovement();
    return Math.trunc(time * bonus/8);
}

function getTime(distance,faction) {
    var modifier = 1 + (getSpeedBonus(faction)/100);
    var time = distance / modifier;
    return Math.floor(time / 60)*60 + Math.trunc(time % 60);
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
    var lost = 0;
    shortestPaths = dijkstra(id);
    
    var dist = shortestPaths[map[id]][0];
    if (dist > 0 && dist < Infinity) {
        var path = rebuildPath(id,map[id]);
        time = getTime(dist,map[id]);
        lost = getResilienceLost(time);
        resleft = Math.trunc(resleft - lost);
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
                var lost = getResilienceLost(time);
                var resleft = Math.trunc(resmax - lost);;
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
