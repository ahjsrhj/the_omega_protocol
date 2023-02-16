//////////////////自定义设置
const portOfSplatoon = 47774; //底裤系带的位置
const usePostNamazu = true; //是否启用鲶鱼精？关闭填false，开启填true (关闭后，标记，聊天框播报都用不了)

//标记
const useMark = true; //是否启用标记？（需确保鲶鱼精已启用）
const onlyMeMark = true; //P1接线标记是否仅自己可见？
const onlyMeMarkP2 = true; //P2一运标记是否仅自己可见？
const onlyMeMarkP2_5 = false; //P2.5标记是否仅自己可见？
const onlyMeMarkP3 = false; //P3小电视点名标记是否仅自己可见？

const P2一运标记 = { //标记左边用攻击标记，右边锁链，从上到下1234 (因为没有锁链4，所以右4用方块代替)
  左1: 'attack1',
  左2: 'attack2',
  左3: 'attack3',
  左4: 'attack4',
  右1: 'bind1',
  右2: 'bind2',
  右3: 'bind3',
  右4: 'square',
}

//鲶鱼精聊天框全队播报
const P1PostNamazu = true; //P1接线踩塔是否鲶鱼精聊天框全队播报
const P2PostNamazu = true; //P2狂暴倒计时是否鲶鱼精聊天框全队播报
const P3PostNamazu1 = true; //P3HW塔颜色播报
const P3PostNamazu = true; //P3小电视站位是否鲶鱼精聊天框全队播报


   


//////////////////打法设置

//优先级（从上到下依次变低）,和cactbotSelf这个插件设置的优先级完全无关，本js独立
const 优先级 = [
  '白魔',
  '占星',
  '黑骑',
  '枪刃',
  '战士',
  '骑士',
  '武士',
  '镰刀',
  '武僧',
  '龙骑',
  '忍者',
  '机工',
  '诗人',
  '舞者',
  '黑魔',
  '召唤',
  '赤魔',
  '贤者',
  '学者'
];

//P2
const 索尼 = { //设置的为从上到下的顺序 
  圆圈: '第一排',
  叉: '第二排',
  三角: '第三排',
  方块: '第四排',
  倒_圆圈: '第四排',
  倒_叉: '第三排',
  倒_三角: '第二排',
  倒_方块: '第一排',
};
//P2一运分组击退，如果分摊点名同组，优先靠下面被点名的和他的连线对象换左右，你们自己固定队这么打
//P3小电视十字法，很无脑


//////////////////splatoon导入
/*

~Lv2~{"Name":"P2 - 男女组合技","Group":"TOP","ZoneLockH":[1122],"DCond":5,"ElementsL":[{"Name":"Omega-M shield","type":1,"radius":10.0,"Donut":21.41,"color":1895825663,"thicc":4.0,"refActorDataID":15714,"FillStep":0.2,"refActorComparisonType":3,"onlyUnTargetable":true,"onlyVisible":true,"refActorUseTransformation":true,"refActorTransformationID":4},{"Name":"Omega-F staff","type":3,"refY":40.0,"offY":-40.0,"radius":5.2,"color":1677721855,"refActorDataID":15715,"refActorComparisonType":3,"includeRotation":true,"onlyUnTargetable":true,"onlyVisible":true,"refActorUseTransformation":true},{"Name":"Omega-F staff","type":3,"refY":40.0,"offY":-40.0,"radius":5.2,"color":1677721855,"refActorDataID":15715,"refActorComparisonType":3,"includeRotation":true,"onlyUnTargetable":true,"onlyVisible":true,"AdditionalRotation":1.5707964,"refActorUseTransformation":true},{"Name":"Omega-F feetfighter","type":3,"refX":16.0,"refY":40.0,"offX":16.0,"offY":-40.0,"radius":12.0,"color":1677721855,"refActorDataID":15715,"refActorComparisonType":3,"includeRotation":true,"onlyUnTargetable":true,"onlyVisible":true,"refActorUseTransformation":true,"refActorTransformationID":4},{"Name":"Omega-F feetfighter","type":3,"refX":-16.0,"refY":40.0,"offX":-16.0,"offY":-40.0,"radius":12.0,"color":1677721855,"refActorDataID":15715,"refActorComparisonType":3,"includeRotation":true,"onlyUnTargetable":true,"onlyVisible":true,"refActorUseTransformation":true,"refActorTransformationID":4},{"Name":"Omega-M blade","type":1,"radius":10.2,"color":2013266175,"thicc":3.0,"refActorDataID":15714,"refActorComparisonType":3,"onlyUnTargetable":true,"onlyVisible":true,"Filled":true,"refActorUseTransformation":true},{"Name":""}],"UseTriggers":true,"Triggers":[{"Type":2,"Duration":4.5,"Match":"(7635>31550)","MatchDelay":8.2}]}

~Lv2~{"Name":"P2 眼睛激光","Group":"TOP","ZoneLockH":[1122],"DCond":5,"ElementsL":[{"Name":"","type":3,"refY":35.0,"offY":65.0,"radius":8.0,"color":1342281215,"overlayBGColor":0,"overlayTextColor":4278190080,"overlayFScale":7.0,"thicc":5.0,"overlayText":"EYE","refActorNPCNameID":7640,"refActorComparisonType":6,"includeRotation":true,"Filled":true},{"Name":"","type":3,"offY":35.0,"radius":8.0,"color":1342177535,"overlayBGColor":0,"overlayTextColor":4278190080,"overlayFScale":7.0,"thicc":5.0,"overlayText":"EYE","refActorNPCNameID":7640,"refActorComparisonType":6,"includeRotation":true,"Filled":true},{"Name":"Circle with tether","type":1,"Enabled":false,"offY":27.04,"radius":5.0,"color":4294967040,"overlayBGColor":0,"overlayTextColor":4278190080,"overlayFScale":7.0,"thicc":5.0,"overlayText":"EYE","refActorNPCNameID":7640,"refActorComparisonType":6,"includeRotation":true,"tether":true,"Filled":true}],"UseTriggers":true,"Triggers":[{"Type":2,"Duration":7.3,"Match":"(7635>31550)","MatchDelay":12.7}]}

~Lv2~{"Name":"P2 Omega-M Finder / 査找M","Group":"TOP","ZoneLockH":[1122],"DCond":5,"ElementsL":[{"Name":"M 位置A","type":1,"radius":0.08,"color":4278255576,"overlayBGColor":3355443200,"overlayTextColor":4290903808,"overlayVOffset":2.0,"overlayFScale":3.0,"thicc":10.0,"overlayText":" !!! 男的 !!! ","refActorNPCID":7633,"FillStep":0.1,"refActorComparisonType":4,"onlyVisible":true,"tether":true,"LimitDistance":true,"DistanceSourceX":100.11486,"DistanceSourceY":88.17513,"DistanceSourceZ":-5.456968E-12,"DistanceMax":5.0},{"Name":"M 位置B","type":1,"radius":0.08,"color":4278255576,"overlayBGColor":3355443200,"overlayTextColor":4290903808,"overlayVOffset":2.0,"overlayFScale":3.0,"thicc":10.0,"overlayText":" !!! 男的 !!! ","refActorNPCID":7633,"FillStep":0.1,"refActorComparisonType":4,"onlyVisible":true,"tether":true,"LimitDistance":true,"DistanceSourceX":112.00324,"DistanceSourceY":100.220314,"DistanceSourceZ":-5.456968E-12,"DistanceMax":5.0},{"Name":"M 位置C","type":1,"radius":0.08,"color":4278255576,"overlayBGColor":3355443200,"overlayTextColor":4290903808,"overlayVOffset":2.0,"overlayFScale":3.0,"thicc":10.0,"overlayText":" !!! 男的 !!! ","refActorNPCID":7633,"FillStep":0.1,"refActorComparisonType":4,"onlyVisible":true,"tether":true,"LimitDistance":true,"DistanceSourceX":100.06399,"DistanceSourceY":112.228424,"DistanceSourceZ":3.8146918E-06,"DistanceMax":5.0},{"Name":"M 位置D","type":1,"radius":0.08,"color":4278255576,"overlayBGColor":3355443200,"overlayTextColor":4290903808,"overlayVOffset":2.0,"overlayFScale":3.0,"thicc":10.0,"overlayText":" !!! 男的 !!! ","refActorNPCID":7633,"FillStep":0.1,"refActorComparisonType":4,"onlyVisible":true,"tether":true,"LimitDistance":true,"DistanceSourceX":88.24621,"DistanceSourceY":99.937874,"DistanceSourceZ":-3.8147027E-06,"DistanceMax":5.0}],"UseTriggers":true,"Triggers":[{"Type":2,"Duration":13.0,"Match":"(7635>31550)"}]}

~Lv2~{"Name":"P2 Omega-F Kick back / 吹飛安全点","Group":"TOP","ZoneLockH":[1122],"DCond":5,"ElementsL":[{"Name":"31521 - 鋼鉄","type":1,"radius":10.0,"color":1342242788,"overlayBGColor":2483027968,"overlayTextColor":4280024832,"overlayVOffset":2.0,"thicc":4.0,"refActorNPCNameID":7633,"FillStep":1.798,"refActorComparisonType":6,"includeRotation":true,"onlyVisible":true,"Filled":true},{"Name":"M主身位置","type":1,"radius":10.0,"color":1006649855,"thicc":4.0,"refActorDataID":15713,"refActorComparisonType":3,"includeRotation":true,"onlyVisible":true,"Filled":true},{"Name":"二运箭雨","type":3,"offY":45.0,"radius":5.0,"color":1351848950,"thicc":0.0,"refActorDataID":15714,"refActorRequireCast":true,"refActorCastId":[31539],"FillStep":5.0,"refActorComparisonType":3,"includeRotation":true}],"UseTriggers":true,"Triggers":[{"Type":2,"Duration":11.0,"Match":"(7640>31521)","MatchDelay":6.0}]}

*/


// //cacbotManager
// let config = {};
// config.portOfSplatoon = 47774; //底裤系带的位置
// config.usePostNamazu = true; //是否启用鲶鱼精？关闭填false，开启填true (关闭后，标记，聊天框播报都用不了)
// config.useMark = true; //是否启用标记？（需确保鲶鱼精已启用）
// //cacbotManager

//鲶鱼精
function PostNamazu(type, text) {
  if (usePostNamazu) {
    if (type == 'queue') {
      callOverlayHandler({
        call: "PostNamazu",
        c: 'queue',
        p: JSON.stringify(text)
      });
      return
    };
    if (type == 'mark') {
      if (useMark) {
        callOverlayHandler({
          call: "PostNamazu",
          c: 'mark',
          p: JSON.stringify(text)
        });
      }
      return
    };
    callOverlayHandler({
      call: "PostNamazu",
      c: type,
      p: text
    });
  }
};

function PostNamazuMarkClear() {
  if (usePostNamazu) {
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <1>'
    });
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <2>'
    });
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <3>'
    });
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <4>'
    });
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <5>'
    });
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <6>'
    });
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <7>'
    });
    callOverlayHandler({
      call: "PostNamazu",
      c: 'command',
      p: '/mk clear <8>'
    });
  }
}

function PostNamazu测试(text) {
  callOverlayHandler({
    call: "PostNamazu",
    c: 'command',
    p: `/e ${text}`
  });
}
//POST
function Splatoon(namespace, time, data) {
  fetch(`http://127.0.0.1:${portOfSplatoon}/?namespace=${namespace}&destroyAt=${time}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  });
}
//ffd
const FFD = {
  颜色 : 'nomal2',
  Send: (json) => {
    fetch(`http://127.0.0.1:8001/rpc`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
    });
  },
  PosTranslation: (x, y, z, angle, distance) => {
    // 点平移函数
    // x,y为原始pos
    // angle为平移弧度（南为0，北为3.14，顺时针为负，逆时针为正）
    // distance为平移距离
    // 返回最终点的[x,z,y]
    if (typeof (x) != Number) x = Number(x)
    if (typeof (y) != Number) y = Number(y)
    if (typeof (z) != Number) z = Number(z)
    if (typeof (angle) != Number) angle = Number(angle)
    if (typeof (distance) != Number) distance = Number(distance)
    let a = distance * Math.sin(angle);
    let b = distance * Math.cos(angle);
    return [x + a, z, y + b]
  },
  GetAng: (heading, where) => {
    //用于获取以单位面向为标准的方向弧度（南为0，北为3.14，顺时针为负，逆时针为正）
    //heading为当前面向弧度
    //where为方位，填“下”“左”“右”
    if (typeof (heading) != Number) heading = Number(heading)
    let a = (heading >= 0) ? -Math.PI / 2 : Math.PI / 2;
    let b = (heading >= 0) ? -Math.PI : Math.PI;
    if (where == "下") return heading + b
    if (where == "左") return heading + a
    if (where == "右") return heading - a
  },
  Rad_Ang: (x, how) => {
    //角度弧度转换函数
    //how不填默认弧度转角度，填1角度转弧度
    if (typeof (x) != Number) x = Number(x)
    if (how == undefined) {
      x = x * 180.0 / Math.PI
    } else {
      x = x * Math.PI / 180.0;
    }
    return x
  },
  send_feetfighter: (data, width, _width, length1, length2, duration) => {
    //发送辣翅画图
    //总宽度，中间留空宽度，向前长度，向后长度
    let len = (width + _width) / 4;

    let angle = FFD.GetAng(data.Heading, '左');
    let temp = FFD.PosTranslation(data.PosX, data.PosY, data.PosZ, angle, len);
    angle = FFD.GetAng(data.Heading, '下');
    temp = FFD.PosTranslation(temp[0], temp[2], data.PosZ, angle, length2);

    let angle2 = FFD.GetAng(data.Heading, '右');
    let temp2 = FFD.PosTranslation(data.PosX, data.PosY, data.PosZ, angle2, len);
    angle2 = FFD.GetAng(data.Heading, '下');
    temp2 = FFD.PosTranslation(temp2[0], temp2[2], data.PosZ, angle2, length2);

    let 辣翅1 = {
      cmd: 'add_omen',
      color: FFD.颜色,
      shape_scale: {
        key: "rect",
        range: length1 + length2,
        width: (width - _width) / 2,
      },
      pos: temp,
      facing: data.Heading,
      'duration': duration,
    };
    let 辣翅2 = {
      cmd: 'add_omen',
      color: FFD.颜色,
      shape_scale: {
        key: "rect",
        range: length1 + length2,
        width: (width - _width) / 2,
      },
      pos: temp2,
      facing: data.Heading,
      'duration': duration,
    };

    FFD.Send(辣翅1);
    FFD.Send(辣翅2);
  }
};
//优先级初始化
let shunxu = [];
for (let i = 0; i < 优先级.length; i++) {
  let temp = {
    'job': 优先级[i],
    'order': i + 1
  };
  shunxu.push(temp);
}
//欧米茄名字语言
const 欧米茄M = ['欧米茄M', 'Omega-M', 'オメガM'];
const 欧米茄F = ['欧米茄F', 'Omega-F', 'オメガF'];
const 眼睛 = ['オプチカルユニット','Optical Unit','视觉组'];



const playstationMarkers = ['circle', 'cross', 'triangle', 'square'];

function getNewArr(a, b) {
  const arr = [...a, ...b];
  const newArr = arr.filter(item => {
    return !(a.includes(item) && b.includes(item));
  });
  return newArr;
}
var 想要的优先级数组;
Array.prototype.mySort = function (目标数组) {
  if (目标数组 == undefined) {
    目标数组 = 想要的优先级数组;
  }
  let newArr = this.sort((a, b) => {
    return 目标数组.indexOf(目标数组.find((c) => c.job == a)) - 目标数组.indexOf(目标数组.find((c) => c.job == b))
  });;

  return newArr;
};
// 姓名 => 中文职业简称
function nametocnjob(name, data) {
  let re;
  switch (data.party.jobName(name)) {
    case 'PLD':
      re = '骑士';
      break;
    case 'MNK':
      re = '武僧';
      break;
    case 'WAR':
      re = '战士';
      break;
    case 'DRG':
      re = '龙骑';
      break;
    case 'BRD':
      re = '诗人';
      break;
    case 'WHM':
      re = '白魔';
      break;
    case 'BLM':
      re = '黑魔';
      break;
    case 'SMN':
      re = '召唤';
      break;
    case 'SCH':
      re = '学者';
      break;
    case 'NIN':
      re = '忍者';
      break;
    case 'MCH':
      re = '机工';
      break;
    case 'DRK':
      re = '黑骑';
      break;
    case 'AST':
      re = '占星';
      break;
    case 'SAM':
      re = '武士';
      break;
    case 'RDM':
      re = '赤魔';
      break;
    case 'GNB':
      re = '枪刃';
      break;
    case 'DNC':
      re = '舞者';
      break;
    case 'RPR':
      re = '镰刀';
      break;
    case 'SGE':
      re = '贤者';
      break;
    case 'BLU':
      re = '青魔';
      break;
  };
  // 如果有重复职业，则播报职业+ID
  // t同职业
  if (data.party.roleToPartyNames_.tank[0] == data.party.roleToPartyNames_.tank[1]) {
    return re + ' ' + data.ShortName(name);
  };
  // H同职业
  if (data.party.roleToPartyNames_.healer[0] == data.party.roleToPartyNames_.healer[1]) {
    return re + ' ' + data.ShortName(name);
  };
  // DPS同职业
  for (let i = 0; i < 3; i++) {
    for (let a = 1; a < 4; a++) {
      if (i == a) {
        continue;
      };
      if (data.party.roleToPartyNames_.dps[i] == data.party.roleToPartyNames_.dps[a]) {
        return re + ' ' + data.ShortName(name);
      };
    };
  };
  // 没有同职业，播报职业
  return re;
};

const headmarkers = {
  // vfx/lockon/eff/lockon5_t0h.avfx
  spread: '0017',
  // vfx/lockon/eff/tank_lockonae_5m_5s_01k1.avfx
  buster: '0157',
  // vfx/lockon/eff/z3oz_firechain_01c.avfx through 04c
  firechainCircle: '01A0',
  firechainTriangle: '01A1',
  firechainSquare: '01A2',
  firechainX: '01A3',
  // vfx/lockon/eff/com_share2i.avfx
  stack: '0064',
  // vfx/lockon/eff/all_at8s_0v.avfx
  meteor: '015A',
};
const playstationHeadmarkerIds = [
  headmarkers.firechainCircle,
  headmarkers.firechainTriangle,
  headmarkers.firechainSquare,
  headmarkers.firechainX,
];
const playstationMarkerMap = {
  [headmarkers.firechainCircle]: '圆圈',
  [headmarkers.firechainTriangle]: '三角',
  [headmarkers.firechainSquare]: '方',
  [headmarkers.firechainX]: '叉',
};
const firstMarker = parseInt('0017', 16);
const getHeadmarkerId = (data, matches) => {
  if (data.decOffset === undefined)
    data.decOffset = parseInt(matches.id, 16) - firstMarker;
  // The leading zeroes are stripped when converting back to string, so we re-add them here.
  // Fortunately, we don't have to worry about whether or not this is robust,
  // since we know all the IDs that will be present in the encounter.
  return (parseInt(matches.id, 16) - data.decOffset).toString(16).toUpperCase().padStart(4, '0');
};

Options.Triggers.push({
	zoneId: 1122,
	overrideTimelineFile: true,
	timelineFile: '绝欧.txt',
	initData: () => {
		return {
			inLine: {},
			塔次数: 0,
			一运: false,
			synergyMarker: {},
			spotlightStacks: [],
			职业优先级: {},
			一运击退换组: [],
			P2一运分摊点名检测: false,
			P3手臂次数: 0,
			P3HW轮次: 1,
			P3小电视点名: [],
		};
	},
	timelineTriggers: [
		{
			id: 'P1踩塔接线鲶鱼精',
			regex: /循环程序/,
			beforeSeconds: -1.5,
			run: (data, matches) => {
				//鲶鱼精播报
				let a = [
					nametocnjob(Object.keys(data['inLine'])[0], data),
					nametocnjob(Object.keys(data['inLine'])[1], data),
					Object.keys(data['inLine'])[0],
					Object.keys(data['inLine'])[1],
				];
				let b = [
					nametocnjob(Object.keys(data['inLine'])[2], data),
					nametocnjob(Object.keys(data['inLine'])[3], data),
					Object.keys(data['inLine'])[2],
					Object.keys(data['inLine'])[3],
				];
				let c = [
					nametocnjob(Object.keys(data['inLine'])[4], data),
					nametocnjob(Object.keys(data['inLine'])[5], data),
					Object.keys(data['inLine'])[4],
					Object.keys(data['inLine'])[5],
				];
				let d = [
					nametocnjob(Object.keys(data['inLine'])[6], data),
					nametocnjob(Object.keys(data['inLine'])[7], data),
					Object.keys(data['inLine'])[6],
					Object.keys(data['inLine'])[7],
				];
				if (data['职业优先级'][a[1]] < data['职业优先级'][a[0]]) {
					let temp = a[0];
					let temp2 = a[2];
					a[0] = a[1];
					a[2] = a[3];
					a[1] = temp;
					a[3] = temp2;
				}
				if (data['职业优先级'][b[1]] < data['职业优先级'][b[0]]) {
					let temp = b[0];
					let temp2 = b[2];
					b[0] = b[1];
					b[2] = b[3];
					b[1] = temp;
					b[3] = temp2;
				}
				if (data['职业优先级'][c[1]] < data['职业优先级'][c[0]]) {
					let temp = c[0];
					let temp2 = c[2];
					c[0] = c[1];
					c[2] = c[3];
					c[1] = temp;
					c[3] = temp2;
				}
				if (data['职业优先级'][d[1]] < data['职业优先级'][d[0]]) {
					let temp = d[0];
					let temp2 = d[2];
					d[0] = d[1];
					d[2] = d[3];
					d[1] = temp;
					d[3] = temp2;
				}
				data.P1分组 = [a, b, c, d];
				if (P1PostNamazu) {
					PostNamazu('queue', [
						{
							c: 'command',
							p: '/p ============',
						},
						{
							c: 'command',
							p: '/p 1塔3线：' + a[0] + ' ' + a[1],
							d: 20,
						},
						{
							c: 'command',
							p: '/p 1线3塔：' + c[0] + ' ' + c[1],
							d: 20,
						},
						{
							c: 'command',
							p: '/p 2塔4线：' + b[0] + ' ' + b[1],
							d: 20,
						},
						{
							c: 'command',
							p: '/p 2线4塔：' + d[0] + ' ' + d[1],
							d: 20,
						},
					]);
				}
				PostNamazuMarkClear();
			},
		},
		{
			id: 'P1接线标记1',
			regex: /冲击波 1/,
			beforeSeconds: 10,
			run: (data, matches) => {
				PostNamazu('mark', {
					Name: data.P1分组[2][2],
					MarkType: 'bind1',
					LocalOnly: onlyMeMark,
				});
				PostNamazu('mark', {
					Name: data.P1分组[2][3],
					MarkType: 'bind2',
					LocalOnly: onlyMeMark,
				});
			},
		},
		{
			id: 'P1接线标记2',
			regex: /冲击波 2/,
			beforeSeconds: 10,
			run: (data, matches) => {
				PostNamazu('mark', {
					Name: data.P1分组[3][2],
					MarkType: 'bind1',
					LocalOnly: onlyMeMark,
				});
				PostNamazu('mark', {
					Name: data.P1分组[3][3],
					MarkType: 'bind2',
					LocalOnly: onlyMeMark,
				});
			},
		},
		{
			id: 'P1接线标记3',
			regex: /冲击波 3/,
			beforeSeconds: 10,
			run: (data, matches) => {
				PostNamazu('mark', {
					Name: data.P1分组[0][2],
					MarkType: 'bind1',
					LocalOnly: onlyMeMark,
				});
				PostNamazu('mark', {
					Name: data.P1分组[0][3],
					MarkType: 'bind2',
					LocalOnly: onlyMeMark,
				});
			},
		},
		{
			id: 'P1接线标记4',
			regex: /冲击波 4/,
			beforeSeconds: 10,
			run: (data, matches) => {
				PostNamazu('mark', {
					Name: data.P1分组[1][2],
					MarkType: 'bind1',
					LocalOnly: onlyMeMark,
				});
				PostNamazu('mark', {
					Name: data.P1分组[1][3],
					MarkType: 'bind2',
					LocalOnly: onlyMeMark,
				});
			},
		},
		{
			id: 'P1接线标记清除',
			regex: /冲击波 4/,
			beforeSeconds: -1,
			run: () => {
				PostNamazuMarkClear();
			},
		},
		{
			id: 'P2一运标记清除',
			regex: /欧米茄烈炎/,
			beforeSeconds: -2,
			run: (data) => {
				PostNamazuMarkClear();
				delete data.towerBuff;
			},
		},
		{
			id: 'P2一运击退去中间',
			regex: /能量放出/,
			beforeSeconds: 5,
			alertText: (data) => {
				if (data.P2一运名字[data.me][1] == '左') {
					return `往左击退`;
				} else {
					if (data.glitch == '远离') {
						return `往右击退`;
					} else {
						return `往下击退`;
					}
				}
			},
		},
		{
			id: 'P2一运分摊点名检测开',
			regex: /能量放出/,
			beforeSeconds: 10,
			run: (data) => {
				data.P2一运分摊点名检测 = true;
			},
		},
		{
			id: 'P2一运分摊点名检测关',
			regex: /能量放出/,
			beforeSeconds: 1,
			run: (data) => {
				data.P2一运分摊点名检测 = false;
			},
		},
		{
			id: 'P2二运躲箭',
			regex: /欧米茄射手天箭/,
			beforeSeconds: 6,
			alertText: (data) => {
				if (!data.party.isTank(data.me)) {
					return '穿穿穿';
				}
			},
		},
		{
			id: 'P2.5标记取消',
			regex: /狙击式大功率波动炮/,
			beforeSeconds: -1,
			run: () => {
				PostNamazuMarkClear();
			},
		},
		{
			id: 'P2.5穿',
			regex: /巨能爆散 1/,
			beforeSeconds: 0,
			alertText: '穿穿穿',
		},
		{
			id: '删除前2P的变量',
			regex: /速射式波动炮 1/,
			beforeSeconds: 1,
			run: (data) => {
				//删除前2P的变量
				data.全能之主优先级 = undefined;
				data.solarRayTargets = undefined;
				data.inLine = undefined;
				data.synergyMarker = undefined;
				data.spotlightStacks = undefined;
				data.cannonFodder = undefined;
				data.塔次数 = undefined;
				data.一运击退换组 = undefined;
				data.P2一运分摊点名检测 = undefined;
				data.我的次序 = undefined;
				data.同组职业 = undefined;
				data.优先级 = undefined;
				data.P1分组 = undefined;
				data.tower = undefined;
				data.变身Boss = undefined;
				data.decOffset = undefined;
				data.glitch = undefined;
				data.P2一运名字 = undefined;
				data.索尼同组人 = undefined;
			},
		},
	],
	triggers: [
		//P1

		{
			id: 'TOP Headmarker Tracker',
			type: 'HeadMarker',
			netRegex: {},
			condition: (data) => data.decOffset === undefined,
			// Unconditionally set the first headmarker here so that future triggers are conditional.
			run: (data, matches) => getHeadmarkerId(data, matches),
		},
		{
			id: 'TOP In Line Debuff',
			type: 'GainsEffect',
			netRegex: NetRegexes.gainsEffect({
				effectId: ['D80'],
				capture: true,
			}),
			delaySeconds: 0.2,
			preRun: (data, matches) => {
				if (data.partJob === undefined) {
					data.partJob = [];
					for (let i = 0; i < 8; i++) {
						let job = nametocnjob(
							data.party.idToName_[data.party.partyIds_[i]],
							data
						);

						data.partJob[i] = {
							ID: data.party.partyIds_[i],
							job: job,
						};
					}
					//按照插件顺序排序
					data.partJob.sort((a, b) => {
						return (
							shunxu.find((c) => c.job == a.job).order -
							shunxu.find((c) => c.job == b.job).order
						);
					});
					data.myJob = nametocnjob(data.me, data);
					data.全能之主优先级 = data.partJob;
					想要的优先级数组 = data.全能之主优先级;

					for (let i = 0; i < 8; i++) {
						data.职业优先级[data.全能之主优先级[i].job] = i;
					}
					data.职业位置 = {};
					data.职业位置.H1 = Object.keys(data.职业优先级)[0];
					data.职业位置.MT = Object.keys(data.职业优先级)[1];
					data.职业位置.ST = Object.keys(data.职业优先级)[2];
					data.职业位置.D1 = Object.keys(data.职业优先级)[3];
					data.职业位置.D2 = Object.keys(data.职业优先级)[4];
					data.职业位置.D3 = Object.keys(data.职业优先级)[5];
					data.职业位置.D4 = Object.keys(data.职业优先级)[6];
					data.职业位置.H2 = Object.keys(data.职业优先级)[7];
				}
			},
			alertText: (data, matches, output) => {
				let time = parseFloat(matches.duration);

				if (data.towerBuff === undefined) data.towerBuff = [];
				let job = nametocnjob(matches.target, data);
				if (time < 20) {
					data.towerBuff.push({
						time: 1,
						job: job,
					});
				} else if (time < 30) {
					data.towerBuff.push({
						time: 2,
						job: job,
					});
				} else if (time < 40) {
					data.towerBuff.push({
						time: 3,
						job: job,
					});
				} else
					data.towerBuff.push({
						time: 4,
						job: job,
					});

				if (matches.target == data.me) {
					data.我的次序 = data['inLine'][data.me];
					for (let i in data['inLine']) {
						if (data['inLine'][i] == data.我的次序 && i != data.me) {
							data.同组职业 = nametocnjob(i, data);
						}
					}
					if (
						Number(data.职业优先级[data.myJob]) <
						Number(data.职业优先级[data.同组职业])
					) {
						data.优先级 = '大';
					} else {
						data.优先级 = '小';
					}

					//TTS
					if (time < 20) {
						return '第1次踩塔，优先级' + data.优先级;
					} else if (time < 30) {
						return '第2次踩塔，优先级' + data.优先级;
					} else if (time < 40) {
						return '第1次接线，优先级' + data.优先级;
					} else return '第2次接线，优先级' + data.优先级;
				}
			},
			run: (data) => {
				delete data.partJob;
			},
		},
		{
			id: 'omega开场buff接线播报',
			type: 'GainsEffect',
			netRegex: NetRegexes.ability({
				id: ['7B08', '7B09'],
			}),
			preRun: (data, matches, output) => data.塔次数++,
			delaySeconds: 0.5,
			alertText: (data, matches, output) => {
				let myTime = data.towerBuff.find((i) => i.job == data.myJob).time;
				if (data.塔次数 == 1 && myTime == 4)
					return '接线，优先级' + data.优先级;
				if (data.塔次数 == 2 && myTime == 1)
					return '接线，优先级' + data.优先级;
				if (data.塔次数 == 3 && myTime == 2)
					return '接线，优先级' + data.优先级;
			},
		},
		{
			id: 'TOP Program Loop Other Debuffs',
			type: 'Object',
			netRegex:
				/] ChatLog 00:0:101:.{8}:0005:(?<id>.{4}):1EB83D:E0000000:(?<x>.+?):(?<y>.+?):/,
			delaySeconds: 0.5,
			preRun: (data, matches) => {
				if (data.towerBuff) {
					if (data.tower === undefined) data.tower = [];
					let x = parseFloat(matches.x);
					let y = parseFloat(matches.y);
					let pos = Math.round(
						Math.round(2 - (2 * Math.atan2(x - 100, y - 100)) / Math.PI) % 4
					);
					data.tower.push(pos);

					let myTime = data.towerBuff.find((i) => i.job == data.myJob);
					let 同组人 = data.towerBuff.find(
						(i) => i.time == myTime.time && i.job != data.myJob
					);
					let 分组 = [myTime.job, 同组人.job];
					// 分组.sort((a, b) => {
					//   return shunxu.find((c) => c.job == a).order - shunxu.find((c) => c.job == b).order
					// });
					分组.sort((a, b) => {
						return (
							data.全能之主优先级.indexOf(
								data.全能之主优先级.find((c) => c.job == a)
							) -
							data.全能之主优先级.indexOf(
								data.全能之主优先级.find((c) => c.job == b)
							)
						);
					});
					let 塔位置 = [];
					let index = 分组.indexOf(data.myJob);
					if (myTime.time == 1) {
						if (data.tower.length >= 2) 塔位置 = [data.tower[0], data.tower[1]];
					}
					if (myTime.time == 2) {
						if (data.tower.length >= 4) 塔位置 = [data.tower[2], data.tower[3]];
					}
					if (myTime.time == 3) {
						if (data.tower.length >= 6) {
							塔位置 = [data.tower[4], data.tower[5]];
						}
					}
					if (myTime.time == 4) {
						if (data.tower.length >= 8) 塔位置 = [data.tower[6], data.tower[7]];
					}
					if (塔位置.length >= 1) {
						塔位置.sort();
						data.bobaoIndex = 塔位置[index];
					}
				}
			},
			alertText: (data, matches, output) => {
				let bobao = ['上', '右', '下', '左'];
				if (data.bobaoIndex !== undefined && !data.bobao) {
					data.bobao = true;
					let bobao1 = `踩${bobao[data.bobaoIndex]}塔`;
					return bobao1;
				}
			},
		},
		{
			id: 'TOP In Line Debuff Cleanup',
			type: 'StartsUsing',
			// 7B03 = Program Loop
			// 7B0B = Pantokrator
			netRegex: {
				id: ['7B03', '7B0B'],
				capture: false,
			},
			// Don't clean up when the buff is lost, as that happens after taking a tower.
			run: (data) => (data.inLine = {}),
		},
		{
			id: 'TOP In Line Debuff Collector',
			type: 'GainsEffect',
			netRegex: {
				effectId: ['BBC', 'BBD', 'BBE', 'D7B'],
			},
			delaySeconds: 0.1,
			preRun: (data, matches) => {
				const effectToNum = {
					BBC: 1,
					BBD: 2,
					BBE: 3,
					D7B: 4,
				};
				const num = effectToNum[matches.effectId];
				if (num === undefined) return;
				data.inLine[matches.target] = num;
			},
		},
		{
			id: '全能之主优先级播报',
			type: 'GainsEffect',
			netRegex: {
				effectId: ['BBC', 'BBD', 'BBE', 'D7B'],
			},
			delaySeconds: 0.1,
			condition: (data, matches, output) => data.bobaoIndex !== undefined,
			suppressSeconds: 10,
			alertText: (data, matches, output) => {
				const myNum = data.inLine[data.me];

				let 同组人 = Object.keys(data.inLine).find((i) => {
					if (i == data.me) return false;
					return data.inLine[i] == myNum;
				});
				let 同组人职业 = nametocnjob(同组人, data);
				let 点名一样 = [同组人职业, data.myJob];
				let abc = Object.keys(data.全能之主优先级);
				let ab = data.全能之主优先级.find((i) => i.job == '黑骑');
				let c = data.全能之主优先级.indexOf(ab);

				点名一样.sort((a, b) => {
					return (
						data.全能之主优先级.indexOf(
							data.全能之主优先级.find((c) => c.job == a)
						) -
						data.全能之主优先级.indexOf(
							data.全能之主优先级.find((c) => c.job == b)
						)
					);
				});
				let index = 点名一样.indexOf(data.myJob);
				if (index == 0) return '去上半场 （右）';
				if (index == 1) return '去下半场 （左）';
			},
		},
		{
			id: 'TOP Pantokrator First Debuffs',
			type: 'StartsUsing',
			// 7B0D = initial Flame Thrower cast, 7E70 = later ones
			netRegex: {
				id: '7B0D',
			},
			suppressSeconds: 1,
			response: (data, _matches, output) => {
				// cactbot-builtin-response
				output.responseOutputStrings = {
					lineStack: {
						en: '1',
					},
					spread: {
						en: '1  (出去)',
					},
				};
				const myNum = data.inLine[data.me];
				if (myNum === 1)
					return {
						alertText: output.spread(),
					};
				return {
					infoText: output.lineStack(),
				};
			},
		},
		{
			id: 'TOP Pantokrator Other Debuffs',
			type: 'Ability',
			// 7B0E = Guided Missile Kyrios spread damage
			netRegex: {
				id: '7B0E',
			},
			preRun: (data) => data.pantoMissileCount++,
			suppressSeconds: 1,
			response: (data, _matches, output) => {
				// cactbot-builtin-response
				output.responseOutputStrings = {
					lineStack: {
						en: '${num}',
					},
					spread: {
						en: '${num} 出去',
					},
				};
				const mechanicNum = data.pantoMissileCount + 1;
				if (mechanicNum >= 5) return;
				const myNum = data.inLine[data.me];
				if (myNum === mechanicNum)
					return {
						alertText: output.spread({
							num: mechanicNum,
						}),
					};
				return {
					infoText: output.lineStack({
						num: mechanicNum,
					}),
				};
			},
		},
		{
			id: 'TOP Program Loop First Debuffs',
			type: 'StartsUsing',
			// 7B07 = Blaster cast (only one cast, but 4 abilities)
			netRegex: {
				id: '7B07',
				capture: false,
			},
		},
		{
			id: 'TOP Diffuse Wave Cannon Kyrios',
			type: 'HeadMarker',
			netRegex: {},
			// We normally call this stuff out for other roles, but tanks often invuln this.
			suppressSeconds: 20,
			alertText: (data, matches, output) => {
				const id = getHeadmarkerId(data, matches);
				if (id === headmarkers.spread) {
					if (data.role === 'tank') {
						return output.tankCleaves();
					} else {
						return output.other();
					}
				}
			},
			outputStrings: {
				tankCleaves: {
					en: '坦克远离引导',
				},
				other: {
					en: '分散，进目标圈引导',
				},
			},
		},
		{
			id: 'TOP Wave Cannon Kyrios',
			type: 'HeadMarker',
			netRegex: {},
			condition: false,
		},
		{
			id: 'TOP Solar Ray You',
			type: 'StartsUsing',
			netRegex: {
				id: ['7E6A', '7E6B'],
			},
			preRun: (data, matches) => data.solarRayTargets.push(matches.target),
			response: (data, matches, output) => {
				// cactbot-builtin-response
				output.responseOutputStrings = {
					tankBusterOnYou: Outputs.tankBusterOnYou,
					tankBusters: Outputs.tankBusters,
				};
				if (matches.target === data.me)
					return {
						alertText: output.tankBusterOnYou(),
					};
				if (
					data.solarRayTargets.length === 2 &&
					!data.solarRayTargets.includes(data.me)
				)
					return {
						infoText: output.tankBusters(),
					};
			},
		},

		//P2

		{
			id: 'TOP Synergy Marker Collect',
			type: 'HeadMarker',
			netRegex: {},
			run: (data, matches) => {
				const id = getHeadmarkerId(data, matches);
				const marker = playstationMarkerMap[id];
				if (marker === undefined) return;
				data.synergyMarker[matches.target] = marker;
			},
		},
		{
			id: 'TOP Mid Remote Glitch',
			type: 'GainsEffect',
			// D63 = Mid Glitch
			// D64 = Remote Glitch
			netRegex: {
				effectId: ['D63', 'D64'],
			},
			suppressSeconds: 10,
			run: (data, matches) =>
				(data.glitch = matches.effectId === 'D63' ? '靠近' : '远离'),
		},
		{
			id: 'TOP Synergy Marker',
			type: 'GainsEffect',
			// In practice, glitch1 glitch2 marker1 marker2 glitch3 glitch4 etc ordering.
			netRegex: {
				effectId: ['D63', 'D64'],
				capture: false,
			},
			delaySeconds: 0.5,
			durationSeconds: 14,
			suppressSeconds: 10,
			infoText: (data, _matches, output) => {
				const glitch = data.glitch;
				data.P2一运名字 = {};

				function leftOrRight(name) {
					let myMarker = data.synergyMarker[name];
					//如果出现问题，至少在这里返回一些东西。
					if (myMarker === undefined) return glitch;
					let partner = 'unknown';
					for (const [_name, _marker] of Object.entries(data.synergyMarker)) {
						if (_marker === myMarker && _name !== name) {
							partner = _name;
							break;
						}
					}
					let otherJob = nametocnjob(partner, data);
					let myJOB = nametocnjob(name, data);
					let 同组 = [myJOB, otherJob];
					同组.sort((a, b) => {
						return (
							data.全能之主优先级.indexOf(
								data.全能之主优先级.find((c) => c.job == a)
							) -
							data.全能之主优先级.indexOf(
								data.全能之主优先级.find((c) => c.job == b)
							)
						);
					});
					let index = 同组.indexOf(myJOB);
					if (name == data.me) {
						data.索尼同组人 = 同组;
						data.myMarker = myMarker;
					}
					if (index == 0) {
						return `左`;
					}
					if (index == 1) {
						return `右`;
					}
				}

				for (let i in data.synergyMarker) {
					data.P2一运名字[i] = [data.synergyMarker[i], leftOrRight(i)];
				}

				return data.myMarker + ',去' + data.P2一运名字[data.me][1];
			},
			run: (data, _matches) => {
				if ((data.synergyMarker.length = 8)) {
					function 去第几排(name) {
						let _索尼;
						let 左右 = data.P2一运名字[name][1];
						if (data.glitch == '靠近' || 左右 == '左') {
							switch (data.P2一运名字[name][0]) {
								case '圆圈':
									_索尼 = 索尼.圆圈;
									break;
								case '三角':
									_索尼 = 索尼.三角;
									break;
								case '方':
									_索尼 = 索尼.方块;
									break;
								case '叉':
									_索尼 = 索尼.叉;
									break;

								default:
									break;
							}
						}
						if (data.glitch == '远离' && 左右 == '右') {
							switch (data.P2一运名字[name][0]) {
								case '圆圈':
									_索尼 = 索尼.倒_圆圈;
									break;
								case '三角':
									_索尼 = 索尼.倒_三角;
									break;
								case '方':
									_索尼 = 索尼.倒_方块;
									break;
								case '叉':
									_索尼 = 索尼.倒_叉;
									break;

								default:
									break;
							}
						}
						return _索尼;
					}

					function 给什么标记(name) {
						let _标记;
						let _左右 = data.P2一运名字[name][1];
						let _排数 = data.P2一运名字[name][2];
						if (_左右 == '左' && _排数 == '第一排') _标记 = P2一运标记.左1;
						if (_左右 == '左' && _排数 == '第二排') _标记 = P2一运标记.左2;
						if (_左右 == '左' && _排数 == '第三排') _标记 = P2一运标记.左3;
						if (_左右 == '左' && _排数 == '第四排') _标记 = P2一运标记.左4;
						if (_左右 == '右' && _排数 == '第一排') _标记 = P2一运标记.右1;
						if (_左右 == '右' && _排数 == '第二排') _标记 = P2一运标记.右2;
						if (_左右 == '右' && _排数 == '第三排') _标记 = P2一运标记.右3;
						if (_左右 == '右' && _排数 == '第四排') _标记 = P2一运标记.右4;
						return _标记;
					}

					for (let i in data.P2一运名字) {
						data.P2一运名字[i].push(去第几排(i));
						data.P2一运名字[i].push(给什么标记(i));
					}

					//标记
					for (let i in data.P2一运名字) {
						PostNamazu('mark', {
							Name: i,
							MarkType: data.P2一运名字[i][3],
							LocalOnly: onlyMeMarkP2,
						});
					}
				}
			},
		},
		{
			id: 'P2 一运画图男女组合技',
			type: 'ability',
			netRegex: NetRegexes.ability({
				id: '7B3E',
			}),
			delaySeconds: 5.5,
			promise: async (data, matches) => {
				const boss = await callOverlayHandler({
					call: 'getCombatants',
					names: 欧米茄F.concat(欧米茄M),
				});
				let F, M;
				for (let i in boss.combatants) {
					if (欧米茄F.includes(boss.combatants[i].Name)) {
						F = boss.combatants[i];
					}
				}
				for (let i in boss.combatants) {
					if (
						欧米茄M.includes(boss.combatants[i].Name) &&
						boss.combatants[i].ID == F.ID + 1
					) {
						M = boss.combatants[i];
					}
				}
				let skills = [];
				skills[0] = F.WeaponId == 0 ? '十字' : '辣翅';
				skills[1] = M.WeaponId == 0 ? '钢铁' : '月环';
				data.P2男女组合技FFD = [skills, F, M];
			},
			alertText: (data) => {
				let skills = data.P2男女组合技FFD[0];
				let re = skills[1] + skills[0];
				if (re == '钢铁十字') return '钢铁十字，远离男女';
				if (re == '月环辣翅') return '月环辣翅，靠近男的';
				if (re == '钢铁辣翅') return '钢铁辣翅，靠近女的';
				if (re == '月环十字') return '月环十字，男人两边';
			},
			run: (data) => {
				let skills = data.P2男女组合技FFD[0];
				const 男人 = data.P2男女组合技FFD[2].ID;
				const 女人 = data.P2男女组合技FFD[1].ID;
				console.log('女人', 女人, skills[0]);
				console.log('男人', 男人, skills[1]);
				let json = {
					钢铁: {
						cmd: 'add_omen',
						color: FFD.颜色,
						shape_scale: {
							key: 'circle',
							range: 10.02,
						},
						pos: {
							key: 'actor_pos',
							id: 男人,
						},
						duration: 5,
					},
					月环: {
						cmd: 'add_omen',
						color: FFD.颜色,
						shape_scale: {
							key: 'donut',
							range: 30,
							inner: 10,
						},
						pos: {
							key: 'actor_pos',
							id: 男人,
						},
						duration: 5,
					},
					十字: {
						cmd: 'add_omen',
						color: FFD.颜色,
						shape_scale: {
							key: 'action_shape',
							id: parseInt('7B2D', 16),
						},
						pos: {
							key: 'actor_pos',
							id: 女人,
						},
						facing: {
							key: 'actor_relative_facing',
							src: 女人,
							dst: 男人,
						},
						duration: 5,
					},
				};

				FFD.Send(json[skills[1]]);
				if (skills[0] == '辣翅') {
					FFD.send_feetfighter(data.P2男女组合技FFD[1], 50, 8, 40, 20, 5);
				} else {
					FFD.Send(json[skills[0]]);
				}
			},
		},
		{
			id: 'P2 一运画图眼睛激光',
			type: 'ability',
			netRegex: NetRegexes.ability({
				id: '7B3E',
			}),
			delaySeconds: 10,
			run: () => {
				let json = {
					cmd: 'foreach',
					name: 'target_id',
					values: { key: 'actors_by_base_id', id: 15716 },
					func: {
						cmd: 'add_omen',
						color: 'nomal',
						shape_scale: {
							key: 'rect',
							range: 65,
							width: 16,
						},
						pos: {
							key: 'actor_pos',
							id: { key: 'arg', name: 'target_id' },
						},
						facing: {
							key: 'actor_facing',
							id: { key: 'arg', name: 'target_id' },
						},
						duration: 10,
					},
				};
				let json2 = {
					cmd: 'foreach',
					name: 'target_id',
					values: { key: 'actors_by_base_id', id: 15716 },
					func: {
						cmd: 'add_omen',
						color: 'hard',
						shape_scale: {
							key: 'rect',
							range: 35,
							width: 16,
						},
						pos: {
							key: 'actor_pos',
							id: { key: 'arg', name: 'target_id' },
						},
						facing: {
							key: 'actor_facing',
							id: { key: 'arg', name: 'target_id' },
						},
						duration: 10,
					},
				};
				FFD.Send(json);
				FFD.Send(json2);
			},
		},
		{
			id: 'TOP Spotlight',
			type: 'HeadMarker',
			netRegex: {},
			preRun: (data, matches) => {
				const id = getHeadmarkerId(data, matches);
				if (id === headmarkers.stack) {
					let job = nametocnjob(matches.target, data);
					data.spotlightStacks.push(job);
				}
			},
			response: (data, _matches, output) => {
				// cactbot-builtin-response

				const glitch = data.glitch;
				let 分摊人 = data.spotlightStacks.sort((a, b) => {
					return (
						data.全能之主优先级.indexOf(
							data.全能之主优先级.find((c) => c.job == a)
						) -
						data.全能之主优先级.indexOf(
							data.全能之主优先级.find((c) => c.job == b)
						)
					);
				});
				if (data.spotlightStacks.length == 2) {
					if (分摊人 == data.索尼同组人 && data.glitch == '远离')
						return '换位后左右击退';
					if (分摊人 == data.索尼同组人 && data.glitch == '靠近')
						return '换位后左下击退';
					if (data.glitch == '远离') return '左右击退';
					if (data.glitch == '靠近') return '左下击退';
				}
			},
		},
		{
			id: 'TOP Optimized Meteor',
			type: 'HeadMarker',
			disabled: true,
			netRegex: {},
			condition: Conditions.targetIsYou(),
		},
		{
			id: 'TOP Beyond Defense',
			disabled: true,
			type: 'Ability',
			netRegex: {
				id: '7B28',
			},
			//condition: Conditions.targetIsYou(),
		},
		{
			id: 'TOP Party Synergy',
			type: 'Ability',
			netRegex: {
				id: '7B3E',
				source: 'Omega',
				capture: false,
			},
			// Untargetable 3s after this, things appear ~2 after this, 2.5 for safety.
			condition: false,
		},
		{
			id: '欧密茄索尼位置播报',
			type: 'Ability',
			netRegex: NetRegexes.ability({
				id: ['7B2D', '7B26', '7B2D', '7B2A'],
			}),
			suppressSeconds: 999,
			alertText: (data, matches, output) => {
				let a = 0;
				if (data.P2一运名字[data.me][2] == '第一排') a = 1;
				if (data.P2一运名字[data.me][2] == '第二排') a = 2;
				if (data.P2一运名字[data.me][2] == '第三排') a = 3;
				if (data.P2一运名字[data.me][2] == '第四排') a = 4;

				return `${data.P2一运名字[data.me][1]}${a}，${data.glitch}`;
			},
		},
		{
			id: 'P2 一运击退换组提示',
			type: 'HeadMarker',
			netRegex: NetRegexes.headMarker(),
			condition: (data, matches) => data.P2一运分摊点名检测,
			preRun: (data, matches) => {
				data.一运击退换组.push(matches.target);
			},
			run: (data) => {
				if (data.一运击退换组.length == 2) {
					//如果同边
					let name1 = data.一运击退换组[0];
					let name2 = data.一运击退换组[1];
					if (data.P2一运名字[name1][1] == data.P2一运名字[name2][1]) {
						let a1 = 0;
						let a2 = 0;
						if (data.P2一运名字[name1][2] == '第一排') a1 = 1;
						if (data.P2一运名字[name1][2] == '第二排') a1 = 2;
						if (data.P2一运名字[name1][2] == '第三排') a1 = 3;
						if (data.P2一运名字[name1][2] == '第四排') a1 = 4;
						if (data.P2一运名字[name2][2] == '第一排') a2 = 1;
						if (data.P2一运名字[name2][2] == '第二排') a2 = 2;
						if (data.P2一运名字[name2][2] == '第三排') a2 = 3;
						if (data.P2一运名字[name2][2] == '第四排') a2 = 4;
						//分析要换位的图形
						let move = '';
						if (a1 > a2) {
							move = data.P2一运名字[name1][0];
						} else {
							move = data.P2一运名字[name2][0];
						}
						//看自己是哪一组
						if (data.P2一运名字[data.me][0] == move) {
							if (data.P2一运名字[data.me][1] == '左') {
								data.P2一运名字[data.me][1] = '右';
							} else {
								data.P2一运名字[data.me][1] = '左';
							}
						}
					}
				}
			},
		},
		{
			id: '二运开始',
			type: 'StartsUsing',
			netRegex: NetRegexes.startsUsing({
				id: '7B38',
				capture: false,
			}),
			run: (data, matches) => {
				data.二运 = true;
			},
			alertText: (data, matches, output) => {
				if (data.role == 'tank') return '准备接线';
				if (data.role !== 'tank') return '集合引导';
			},
		},
		{
			id: 'P2二运splatoon投盾男',
			type: 'StartsUsing',
			netRegex: NetRegexes.startsUsing({
				id: ['7B33'],
				capture: false,
			}),
			delaySeconds: 8,
			run: () => {
				let namespace = '投盾男';
				let time = '15000';
				let json = `{
          "Name": "二运M位置",
          "type": 1,
          "radius": 3.0,
          "color": 4278190335,
          "overlayBGColor": 3355443200,
          "overlayTextColor": 4290903808,
          "overlayVOffset": 2.0,
          "overlayFScale": 3.0,
          "thicc": 5.0,
          "refActorDataID": 15714,
          "refActorPlaceholder": [],
          "refActorComparisonAnd": true,
          "FillStep": 0.1,
          "refActorComparisonType": 7,
          "onlyVisible": true,
          "tether": true,
          "DistanceSourceX": 100.11486,
          "DistanceSourceY": 88.17513,
          "DistanceSourceZ": -5.456968E-12,
          "DistanceMax": 5.0,
          "refActorVFXPath": "vfx/common/eff/mon_eisyo03t.avfx",
          "refActorVFXMax": 999000
        }`;
				Splatoon(namespace, time, json);
			},
		},
		{
			id: '二运开始结束',
			type: 'StartsUsing',
			netRegex: NetRegexes.startsUsing({
				id: ['7B38'],
				capture: false,
			}),
			delaySeconds: 15,
			run: (data, matches) => {
				data.二运 = false;
			},
		},
		// {
		//   id: '二运变身boss',
		//   netRegex: /] ChatLog 00:0:106:(?<sourceID>(?:[^:]*)):(?<sourceName>(?:[^:]*)):0031:.{4}:.{4}0011:/,
		//   condition: (data, matches) => data.二运,
		//   suppressSeconds: 20,
		//   promise: async (data, matches) => {
		//     const boss = await callOverlayHandler({
		//       call: 'getCombatants',
		//       ids: [parseInt(matches.sourceID, 16)],
		//     });
		//     let 二运boss = boss.combatants[0];
		//     data.pos = Math.round(Math.round(4 - 4 * Math.atan2(二运boss.PosX - 100, 二运boss.PosY - 100) / Math.PI) % 8);
		//   },
		//   alertText: (data, matches, output) => {
		//     let bobao = ['上', '右上', '右', '右下', '下', '左下', '左', '左上'];
		//     return `面向${bobao[data.pos]}`
		//   }

		// },
		{
			id: '欧密茄二运连线',
			type: 'Tether',
			netRegex: NetRegexes.tether({
				id: '0054',
			}),
			promise: async (data, matches) => {
				const boss = await callOverlayHandler({
					call: 'getCombatants',
					ids: [parseInt(matches.sourceId, 16)],
				});
				let 二运boss = boss.combatants[0];
				if (data.linePos === undefined) data.linePos = [];
				let pos = Math.round(
					Math.round(
						4 -
							(4 * Math.atan2(二运boss.PosX - 100, 二运boss.PosY - 100)) /
								Math.PI
					) % 8
				);
				data.linePos.push(pos);
			},
			alertText: (data, matches) => {
				if (data.linePos.length == 2) {
					data.linePos.sort();
					let bobao = ['上', '右上', '右', '右下', '下', '左下', '左', '左上'];
					let myRoleInparty = data.全能之主优先级.findIndex(
						(i) => i.job == data.myJob
					);
					//是mt
					if (myRoleInparty == 1) return `去${bobao[data.linePos[0]]}接线`;
					//是st
					if (myRoleInparty == 2) return `去${bobao[data.linePos[1]]}接线`;
				}
			},
		},
		{
			id: 'P2狂暴倒计时',
			ttype: 'ability',
			netRegex: NetRegexes.ability({
				id: ['7B22'],
				capture: false,
			}),
			delaySeconds: 7.6,
			run: () => {
				if (P2PostNamazu) {
					PostNamazu('queue', [
						{
							c: 'command',
							p: '/p 离狂暴还有20秒 <se.1>',
						},
						{
							c: 'command',
							p: '/p 离狂暴还有10秒 <se.1>',
							d: 10 * 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有9秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有8秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有7秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有6秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有5秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有4秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有3秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有2秒 <se.1>',
							d: 1000,
						},
						{
							c: 'command',
							p: '/p 离狂暴还有1秒 <se.1>',
							d: 1000,
						},
					]);
				}
			},
		},

		//p3
		{
			id: '欧密茄p2.5buff',
			type: 'GainsEffect',
			netRegex: NetRegexes.gainsEffect({
				effectId: ['D61', 'D62'],
				capture: true,
			}),
			alertText: (data, matches) => {
				let name = matches.target;
				//分散
				if (matches.effectId == 'D61') {
					if (data.P2_5分散人 === undefined) data.P2_5分散人 = [];
					data.P2_5分散人.push(name);
				}
				//分摊
				if (matches.effectId == 'D62') {
					if (data.P2_5分摊人 === undefined) data.P2_5分摊人 = [];
					data.P2_5分摊人.push(name);
				}
				if (data.P2_5分散人.length == 4 && data.P2_5分摊人.length == 2) {
					function 职业优先级排序(a, b) {
						let jobA = nametocnjob(a, data);
						let jobB = nametocnjob(b, data);
						return data.职业优先级[jobA] - data.职业优先级[jobB];
					}

					//点名分散
					data.P2_5分散人.sort(职业优先级排序);

					//点名分摊
					data.P2_5分摊人.sort(职业优先级排序);

					//无点名分摊
					let 所有人 = Object.keys(data.inLine);
					data.P2_5无点名 = 所有人.filter(
						(a) =>
							data.P2_5分散人.indexOf(a) == -1 &&
							data.P2_5分摊人.indexOf(a) == -1
					);

					//自己
					if (data.me == data.P2_5分散人[0]) return '左边分散';
					if (data.me == data.P2_5分散人[1]) return '左下分散';
					if (data.me == data.P2_5分散人[2]) return '右下分散';
					if (data.me == data.P2_5分散人[3]) return '右边分散';
					if (data.me == data.P2_5分摊人[0] || data.me == data.P2_5无点名[0])
						return '左上分摊';
					if (data.me == data.P2_5分摊人[1] || data.me == data.P2_5无点名[1])
						return '右上分摊';
				}
			},
			//标记
			run: (data, matches) => {
				if (data.P2_5分散人.length == 4 && data.P2_5分摊人.length == 2) {
					PostNamazu('mark', {
						Name: data.P2_5分散人[0],
						MarkType: `attack1`,
						LocalOnly: onlyMeMarkP2_5,
					});
					PostNamazu('mark', {
						Name: data.P2_5分散人[1],
						MarkType: `attack2`,
						LocalOnly: onlyMeMarkP2_5,
					});
					PostNamazu('mark', {
						Name: data.P2_5分散人[2],
						MarkType: `attack3`,
						LocalOnly: onlyMeMarkP2_5,
					});
					PostNamazu('mark', {
						Name: data.P2_5分散人[3],
						MarkType: `attack4`,
						LocalOnly: onlyMeMarkP2_5,
					});

					PostNamazu('mark', {
						Name: data.P2_5分摊人[0],
						MarkType: `bind1`,
						LocalOnly: onlyMeMarkP2_5,
					});
					PostNamazu('mark', {
						Name: data.P2_5分摊人[1],
						MarkType: `bind2`,
						LocalOnly: onlyMeMarkP2_5,
					});
					PostNamazu('mark', {
						Name: data.P2_5无点名[0],
						MarkType: `stop1`,
						LocalOnly: onlyMeMarkP2_5,
					});
					PostNamazu('mark', {
						Name: data.P2_5无点名[1],
						MarkType: `stop2`,
						LocalOnly: onlyMeMarkP2_5,
					});
				}
			},
		},
		{
			id: 'P2.5手臂画图',
			netRegex:
				/^.{14} (?:\w+ )00:0:105:.{8}:.{4}:00:00:00:(?<posX>[^:]*):(?<posY>[^:]*):0.00:1571(8|9):/,
			delaySeconds: 2,
			preRun: (data, matches) => {
				if (data.P3手臂次数 < 3) {
					let namespace = `P2.5手臂`;
					let time = '10000';
					let json = `{
            "Name": "P2.5手臂${data.P3手臂次数}",
            "refX": ${matches.posX},
            "refY": ${matches.posY},
            "radius": 11.0,
            "color": 1174438399,
            "Filled": true
          }`;
					Splatoon(namespace, time, json);
				}
			},
			run: (data, matches) => {
				data.P3手臂次数++;
			},
		},
		//HW专场

		//  DC7 蓝DNA：吃到大圈解除。 27.00
		//  DAF 绿线，和上面必定同时在一起 23.00

		//  DC6 红毒，去踩红塔 27.00   D6E
		//  D65 蓝毒，去踩蓝塔 27.00   D6F
		//  DC5 大圈 21.00   D6D
		//  DC4 分摊 21.00   D6C

		//  D71 蓝线，分摊后拉远 23.00（必须是23.00秒的才是第一组）

		//判定时间为hw读条结束后五秒开始算
		{
			id: 'P3HW 拉线BUFF收集',
			type: 'GainsEffect',
			netRegex: NetRegexes.gainsEffect({
				effectId: ['DAF', 'D71'],
				capture: true,
			}),
			run: (data, matches) => {
				switch (matches.effectId) {
					case 'DAF':
						if (matches.duration == '23.00')
							data.smellRot[matches.target] = '绿线';
						break;
					case 'D71':
						if (matches.duration == '23.00')
							data.smellRot[matches.target] = '蓝线';
						break;
				}
			},
		},
		{
			id: 'TOP Code Smell Collector',
			type: 'GainsEffect',
			// D6C Synchronization Code Smell (stack)
			// D6D Overflow Code Smell (defamation)
			// D6E Underflow Code Smell (red)
			// D6F Performance Code Smell (blue)
			// D71 Remote Code Smell (far tethers)
			// DAF Local Code Smell (near tethers)
			// DC9 Local Regression (near tethers)
			// DCA Remote Regression (far tethers)
			// DC4 Critical Synchronization Bug (stack)
			// DC5 Critical Overflow Bug (defamation)
			// DC6 Critical Underflow Bug (red)
			// D65 Critical Performance Bug (blue)
			netRegex: {
				effectId: ['D6D', 'D6E', 'D6F'],
			},
			run: (data, matches) => {
				const isDefamation = matches.effectId === 'D6D';
				const isRed = matches.effectId === 'D6E';
				const isBlue = matches.effectId === 'D6F';
				if (isDefamation) data.smellDefamation.push(matches.target);
				else if (isRed) data.smellRot[matches.target] = 'red';
				else if (isBlue) data.smellRot[matches.target] = 'blue';
			},
		},
		{
			id: 'TOP Sniper Cannon Fodder',
			type: 'GainsEffect',
			netRegex: {
				effectId: 'D61',
			},
			disabled: true,
		},
		{
			id: 'TOP High-Powered Sniper Cannon Fodder Collect',
			type: 'GainsEffect',
			netRegex: {
				effectId: 'D62',
			},
			disabled: true,
		},
		{
			id: 'TOP High-Powered Sniper Cannon Fodder',
			type: 'GainsEffect',
			netRegex: {
				effectId: 'D62',
				capture: false,
			},
			disabled: true,
		},
		{
			id: 'TOP Rot Pass/Get',
			type: 'Ability',
			// 7B5F Cascading Latent Defect (Red Tower)
			// 7B60 Latent Performance Defect (Blue Tower)
			// These casts go off 1 second after Latent Defect and go off regardless if someone soaks it
			netRegex: { id: ['7B5F', '7B60'], source: 'Omega', capture: false },
			disabled: true,
		},
		{
			id: 'TOP P3 Second Regression Break Tether',
			type: 'GainsEffect',
			// DC9 Local Regression (red/green)
			// DCA Remote Regression (blue)
			// Debuffs last 10s
			// Ideally first patch that breaks is blue, else this will not work
			// Will call out if has not broken yet and it is safe to break, if by end
			// of delay and first tether has not broken, it will not call
			netRegex: { effectId: ['DC9', 'DCA'] },
			disabled: true,
		},
		{
			id: 'TOP Latent Defect Tower',
			type: 'StartsUsing',
			netRegex: { id: '7B6F', source: 'Omega', capture: false },
			disabled: true,
		},
		{
			id: 'TOP Latent Defect Tether Towers',
			type: 'GainsEffect',
			// D71 Remote Code Smell (blue)
			// DAF Local Code Smell(red/green)
			// Using Code Smell as the regressions come ~8.75s after Latent Defect
			// Debuffs are 23, 44, 65, and 86s
			// TODO: Possibly include direction?
			netRegex: { effectId: ['D71', 'DAF'] },
			disabled: true,
		},
		{
      id: 'TOP Rot Spread',
      type: 'GainsEffect',
      // D65 Critical Performance Bug (blue)
      // DC6 Critical Underflow Bug (red)
      // Debuffs last 27s
      netRegex: { effectId: ['D65', 'DC6'] },
      // TODO: should we have a "Watch Rot" call if you don't get it?
      // (with some suppression due to inconsistent rot pickup timings etc)
			disabled: true,
    },
		{
			id: 'TOP Code Smell Defamation Color',
			type: 'GainsEffect',
			netRegex: {
				effectId: 'D6D',
				capture: false,
			},
			delaySeconds: 0.5,
			suppressSeconds: 1,
			durationSeconds: 103,
			alarmText: (data, _matches, output) => {
				let rotColor;
				if (data.smellDefamation.length !== 2) {
					console.error(
						`Defamation: missing person: ${JSON.stringify(
							data.smellDefamation
						)}, ${JSON.stringify(data.smellRot)}`
					);
				}
				for (const target of data.smellDefamation) {
					const color = data.smellRot[target];
					if (color === undefined) {
						console.error(
							`Defamation: missing color: ${JSON.stringify(
								data.smellDefamation
							)}, ${JSON.stringify(data.smellRot)}`
						);
						continue;
					}
					if (rotColor === undefined) {
						rotColor = color;
						continue;
					}
					if (rotColor !== color) {
						console.error(
							`Defamation: conflicting color: ${JSON.stringify(
								data.smellDefamation
							)}, ${JSON.stringify(data.smellRot)}`
						);
						rotColor = undefined;
						break;
					}
				}
				data.defamationColor = rotColor;
				if (rotColor === 'red') {
					data.P3HW大圈塔 = '红';
					data.P3HW分摊塔 = '蓝';
					if (P3PostNamazu1) PostNamazu('command', '大圈红色red，分摊蓝色blue');
					return output.red();
				} else if (rotColor === 'blue') {
					data.P3HW大圈塔 = '蓝';
					data.P3HW分摊塔 = '红';
					if (P3PostNamazu1) PostNamazu('command', '大圈蓝色blue，分摊红色red');
					return output.blue();
				}
				return output.unknown();
			},
			outputStrings: {
				red: {
					en: 'Red Defamation',
					de: 'Rote Ehrenstrafe',
					ko: '빨강 광역',
					cn: '大圈红色，分摊蓝色',
				},
				blue: {
					en: 'Blue Defamation',
					de: 'Blaue Ehrenstrafe',
					ko: '파랑 광역',
					cn: '大圈蓝色，分摊红色',
				},
				unknown: {
					en: '??? Defamation',
					de: '??? Ehrenstrafe',
					ko: '??? 광역',
				},
			},
		},
		{
			id: '优先级',
			type: 'StartsUsing',
			netRegex: NetRegexes.startsUsing({
				id: '7B55',
			}),
			delaySeconds: 8,
			durationSeconds: 102,
			infoText: (data, matches) => {
				let 我的点名 = data.smellRot[data.me];
				let 同组人;
				for (let i in data.smellRot) {
					if (i != data.me && data.smellRot[i] == 我的点名) 同组人 = i;
				}
				同组人 = nametocnjob(同组人, data);
				if (data.职业优先级[同组人] < data.职业优先级[data.myJob]) {
					return '优先级小';
				} else {
					return '优先级大';
				}
			},
			run: (data) => {
				data.HW1 = [
					`踩${data.P3HW大圈塔}塔放大圈`,
					`靠近${data.P3HW分摊塔}塔吃分摊`,
					`踩${data.P3HW分摊塔}塔放分摊`,
					`靠近${data.P3HW大圈塔}塔吃大圈`,
				];
				data.HW2 = ['', `接毒，然后拉远线`, '', `接毒，然后拉近线`];
				let myBuff = data.smellRot[data.me];
				let isBig = data.smellDefamation.includes(data.me);
				if (isBig) data.P3HWtts = 1;
				if (!isBig) data.P3HWtts = 3;
				if (myBuff == '绿线') data.P3HWtts = 4;
				if (myBuff == '蓝线') data.P3HWtts = 2;
			},
		},

		{
			id: 'P3 HW第一轮播报',
			type: 'StartsUsing',
			netRegex: NetRegexes.startsUsing({
				id: '7B55',
			}), //你好世界读条开始
			delaySeconds: 11,
			durationSeconds: 15,
			alertText: (data) => {
				//第一轮1
				return data.HW1[data.P3HWtts - 1];
			},
		},
		{
			id: 'P3 HW传毒拉线播报',
			type: 'ability',
			netRegex: NetRegexes.ability({
				id: '7B6F',
			}), //潜在错误读条结束
			durationSeconds: 10,
			alertText: (data) => {
				if (data.P3HW轮次 == 1) {
					//第一轮2
					return data.HW2[data.P3HWtts - 1];
				}
				if (data.P3HW轮次 == 2) {
					//第二轮2
					let num = ((data.P3HWtts + (2 - 1)) % 4) - 1;
					if (num < 0) num = num + 4;
					return data.HW2[num];
				}
				if (data.P3HW轮次 == 3) {
					//第三轮2
					let num = ((data.P3HWtts + (3 - 1)) % 4) - 1;
					if (num < 0) num = num + 4;
					return data.HW2[num];
				}
				if (data.P3HW轮次 == 4) {
					//第四轮2
					return 'Hello Word 结束';
				}
			},
			run: (data) => data.P3HW轮次++,
		},
		{
			id: 'P3 HW踩塔播报',
			type: 'StartsUsing',
			netRegex: NetRegexes.startsUsing({
				id: '7B6F',
			}),
			durationSeconds: 15,
			alertText: (data) => {
				if (data.P3HW轮次 == 2) {
					//第二轮1
					let num = ((data.P3HWtts + (2 - 1)) % 4) - 1;
					if (num < 0) num = num + 4;
					return data.HW1[num];
				}
				if (data.P3HW轮次 == 3) {
					//第三轮1
					let num = ((data.P3HWtts + (3 - 1)) % 4) - 1;
					if (num < 0) num = num + 4;
					return data.HW1[num];
				}
				if (data.P3HW轮次 == 4) {
					//第四轮1
					let num = ((data.P3HWtts + (4 - 1)) % 4) - 1;
					if (num < 0) num = num + 4;
					if (num == 3) {
						return `最后一轮靠近${data.P3HW分摊塔}塔`;
					}
					return data.HW1[num];
				}
			},
		},

		{
			id: 'P3 小电视点名标记',
			type: 'GainsEffect',
			netRegex: NetRegexes.gainsEffect({
				effectId: ['D7D', 'D7C'],
				capture: true,
			}),
			durationSeconds: 5,
			preRun: (data, matches) => {
				data.P3小电视点名.push(matches.target);
			},
			alertText: (data) => {
				//报位置
				if (data.P3小电视点名.length == 3) {
					data.P3小电视站位 = {};
					data.P3小电视站位.左2 = data.职业位置.D3;
					data.P3小电视站位.左1 = data.职业位置.D1;
					data.P3小电视站位.右1 = data.职业位置.D2;
					data.P3小电视站位.右2 = data.职业位置.D4;
					data.P3小电视站位.上2 = data.职业位置.H1;
					data.P3小电视站位.上1 = data.职业位置.MT;
					data.P3小电视站位.下1 = data.职业位置.ST;
					data.P3小电视站位.下2 = data.职业位置.H2;
					//交换顺序
					let 左2 = data.P3小电视站位.左2;
					let 左1 = data.P3小电视站位.左1;
					let 右1 = data.P3小电视站位.右1;
					let 右2 = data.P3小电视站位.右2;
					let 上2 = data.P3小电视站位.上2;
					let 上1 = data.P3小电视站位.上1;
					let 下1 = data.P3小电视站位.下1;
					let 下2 = data.P3小电视站位.下2;
					let temp = [
						[左2, 上2],
						[左1, 上1],
						[右1, 下1],
						[右2, 下2],
					];
					let 点名3人组 = [
						nametocnjob(data.P3小电视点名[0], data),
						nametocnjob(data.P3小电视点名[1], data),
						nametocnjob(data.P3小电视点名[2], data),
					];
					let temp2 = [temp[0][1], temp[1][1], temp[2][1], temp[3][1]]; //下面组
					let 交集 = temp2.filter((value) => 点名3人组.includes(value)); //下面组有几个点名
					if (交集.length > 1) {
						//如果下面组人数>1
						for (let i = 0; i < 4; i++) {
							let _temp2 = [temp[0][1], temp[1][1], temp[2][1], temp[3][1]]; //下面组
							let _交集 = _temp2.filter((value) => 点名3人组.includes(value)); //下面组有几个点名
							if (_交集.length > 1) {
								//如果下面组人数>1
								if (
									(temp[i].filter((value) =>
										点名3人组.includes(value)
									).length = 1)
								) {
									//如果当前上下组里有一个点名
									if (!点名3人组.includes(temp[i][0])) {
										//如果同组上面有点名则不换
										temp[i].reverse();
									}
								}
							} else break;
						}
					} else {
						if (交集.length < 1) {
							//如果下面组人数为0
							for (let i = 3; i >= 0; i--) {
								if (
									(temp[i].filter((value) =>
										点名3人组.includes(value)
									).length = 1)
								) {
									//如果当前上下组里有一个点名
									temp[i].reverse();
									break;
								}
							}
						}
					}
					//
					data.P3小电视补充 = '';
					let ppp = [temp[0][0], temp[1][0], temp[2][0], temp[3][0]];
					if (ppp.includes(data.myJob)) {
						ppp = ppp.filter((value) => 点名3人组.includes(value));
						if (ppp[0] == data.myJob) {
							data.P3小电视补充 = '往上放';
						}
						if (ppp[1] == data.myJob) {
							data.P3小电视补充 = '往下放';
						}
					}
					data.P3点名3人组 = 点名3人组;
					//
					data.P3小电视站位.左2 = temp[0][0];
					data.P3小电视站位.左1 = temp[1][0];
					data.P3小电视站位.右1 = temp[2][0];
					data.P3小电视站位.右2 = temp[3][0];
					data.P3小电视站位.上2 = temp[0][1];
					data.P3小电视站位.上1 = temp[1][1];
					data.P3小电视站位.下1 = temp[2][1];
					data.P3小电视站位.下2 = temp[3][1];
					for (let i in data.P3小电视站位) {
						if (data.P3小电视站位[i] == data.myJob) {
							if (i == '左2') return `横排第1`;
							if (i == '左1') return `横排第2`;
							if (i == '右1') return `横排第3`;
							if (i == '右2') return `横排第4`;
							if (i == '上2') return `竖排第1`;
							if (i == '上1') return `竖排第2`;
							if (i == '下1') return `竖排第3`;
							if (i == '下2') return `竖排第4`;
						}
					}
				}
			},
			run: (data) => {
				if (data.P3小电视点名.length == 3) {
					//标记
					if (useMark) {
						PostNamazu('queue', [
							{
								c: 'mark',
								p: JSON.stringify({
									Name: data.P3小电视点名[0],
									MarkType: `attack1`,
									LocalOnly: onlyMeMarkP3,
								}),
							},
							{
								c: 'mark',
								p: JSON.stringify({
									Name: data.P3小电视点名[1],
									MarkType: `attack2`,
									LocalOnly: onlyMeMarkP3,
								}),
								d: 100,
							},
							{
								c: 'mark',
								p: JSON.stringify({
									Name: data.P3小电视点名[2],
									MarkType: `attack3`,
									LocalOnly: onlyMeMarkP3,
								}),
								d: 100,
							},
						]);
					}
					if (P3PostNamazu) {
						PostNamazu('queue', [
							{
								c: 'command',
								p: `/p                   ${data.P3小电视站位.上2}           `,
								d: 100,
							},
							{
								c: 'command',
								p: `/p                   ${data.P3小电视站位.上1}           `,
							},
							{
								c: 'command',
								p: `/p  ${data.P3小电视站位.左2}   ${data.P3小电视站位.左1}     ${data.P3小电视站位.右1}    ${data.P3小电视站位.右2}`,
							},
							{
								c: 'command',
								p: `/p                   ${data.P3小电视站位.下1}           `,
							},
							{
								c: 'command',
								p: `/p                   ${data.P3小电视站位.下2}           `,
							},
						]);
					}
				}
			},
		},
		{
			id: 'P3 小电视背对面朝',
			type: 'GainsEffect',
			// D7C = Oversampled Wave Cannon Loading (facing right)
			// D7D = Oversampled Wave Cannon Loading (facing left)
			netRegex: { effectId: ['D7C', 'D7D'], capture: true },
			condition: Conditions.targetIsYou(),
			delaySeconds: 2,
			durationSeconds: 5,
			infoText: (data, matches) => {
				let boss = data.P3BOSS电视; // '右' || '左'
				let 结果 = data.P3小电视补充; // '往上放' || '往下放'
				let 自己 = matches.effectId == 'D7C' ? '右' : '左';
				let re = '';
				//横排左
				if (
					[data.P3小电视站位.左2, data.P3小电视站位.左1].includes(data.myJob)
				) {
					if (
						(结果 == '往上放' && 自己 == '右') ||
						(结果 == '往下放' && 自己 == '左')
					) {
						re = `背对BOSS，然后向${自己}走一步`;
					} else re = `面朝BOSS，然后向${自己}走一步`;
				}
				//横排右
				if (
					[data.P3小电视站位.右2, data.P3小电视站位.右1].includes(data.myJob)
				) {
					if (
						(结果 == '往上放' && 自己 == '右') ||
						(结果 == '往下放' && 自己 == '左')
					) {
						re = `面朝BOSS，然后向${自己}走一步`;
					} else re = `背对BOSS，然后向${自己}走一步`;
				}
				//竖排上
				if (
					[data.P3小电视站位.上2, data.P3小电视站位.上1].includes(data.myJob)
				) {
					if (
						(boss == '右' && 自己 == '右') ||
						(结果 == '左' && 自己 == '左')
					) {
						re = `面朝BOSS，然后向${自己}走一步`;
					} else re = `背对BOSS，然后向${自己}走一步`;
				}
				//竖排下
				if (
					[data.P3小电视站位.下2, data.P3小电视站位.下1].includes(data.myJob)
				) {
					if (
						(boss == '右' && 自己 == '右') ||
						(结果 == '左' && 自己 == '左')
					) {
						re = `背对BOSS，然后向${自己}走一步`;
					} else re = `面朝BOSS，然后向${自己}走一步`;
				}
				return re;
			},
		},
		{
			id: 'P3 小电视没点名的人的半场',
			type: 'GainsEffect',
			netRegex: { effectId: ['D7C', 'D7D'], capture: false },
			suppressSeconds: 3,
			delaySeconds: 2,
			durationSeconds: 5,
			infoText: (data, matches) => {
				if (
					[
						data.P3小电视站位.上2,
						data.P3小电视站位.上1,
						data.P3小电视站位.下2,
						data.P3小电视站位.下1,
					].includes(data.myJob)
				) {
					if (data.P3BOSS电视 == '左') {
						return '站右半场';
					} else {
						return '站左半场';
					}
				}
			},
		},
		{
			id: 'TOP Oversampled Wave Cannon Loading',
			type: 'GainsEffect',
			// D7C = Oversampled Wave Cannon Loading (facing right)
			// D7D = Oversampled Wave Cannon Loading (facing left)
			netRegex: { effectId: ['D7C', 'D7D'] },
			disabled: true,
		},
		{
			id: 'TOP Oversampled Wave Cannon East',
			type: 'StartsUsing',
			netRegex: { id: ['7B6B', '7B6C'], capture: true },
			run: (data, matches) =>
				(data.P3BOSS电视 = matches.id == '7B6B' ? '右' : '左'),
		},
		{
			id: 'P3 狂暴',
			type: 'StartsUsing',
			netRegex: { id: '7B48', capture: false },
			alertText: 'P3狂暴',
		},

		//P4
	],
});