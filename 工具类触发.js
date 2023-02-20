//鲶鱼精
const usePostNamazu = true; //关闭填false，开启填true
function PostNamazu(type, text) {
	if (usePostNamazu) {
		if (type == 'queue') {
			callOverlayHandler({
				call: 'PostNamazu',
				c: 'queue',
				p: JSON.stringify(text),
			});
			return;
		}
		if (type == 'mark') {
			callOverlayHandler({
				call: 'PostNamazu',
				c: 'mark',
				p: JSON.stringify(text),
			});
			return;
		}
		callOverlayHandler({
			call: 'PostNamazu',
			c: type,
			p: text,
		});
	}
}


var party = [];
var on = true;

Options.Triggers.push({
	zoneId: ZoneId.MatchAll,
	triggers: [
		{
			id: '食物检测',
			netRegex: /戦闘開始まで/,
			suppressSeconds: 40,
			promise: async (data, matches) => {
				let all = await callOverlayHandler({
					call: 'getCombatants',
				});
				if (all.length<8) {
					on = false;
					return
				}
				
				party = [
					all.combatants[0],
					all.combatants[1],
					all.combatants[2],
					all.combatants[3],
					all.combatants[4],
					all.combatants[5],
					all.combatants[6],
					all.combatants[7],
				];
				//格式化party
				for (const i in party) {
					if (party[i].WorldName == null) return
					let buffs = party[i].Effects;
					let time = 0;
					for (const j in buffs) {
						let buff = Number(buffs[j].BuffID);
						if (buff == 48) {
							time = Number(buffs[j].Timer);
						}
					}
					party[i] = {
						name:party[i].Name,
						time:time
					};
				}
			},
			alertText: () => {
				if (!on) return
				let time = party[0].time;
				if (time == 0) {
					return '当前没有食物！';
				}
				if (time < 300) {
					return '食物时间不足5分钟！';
				}
				if (time < 600) {
					return '食物时间不足10分钟！';
				}
				if (time < 900) {
					return '食物时间不足15分钟！';
				}
				if (time < 1200) {
					return '食物时间不足20分钟！';
				}
			},
			run: () => {
				if (!on) return
				let text = [];
				let a = 0;
				for (const i in party) {
					if (i == 0) continue
					let name = party[i].name;
					let time = party[i].time;
					if (time == 0) {
						text[a] = `/e ${name} 当前没有食物！`;
						a++;
						continue;
					}
					if (time < 300) {
						text[a] = `/e ${name} 食物时间不足5分钟！`;
						a++;
						continue;
					}
					if (time < 600) {
						text[a] = `/e ${name} 食物时间不足10分钟！`;
						a++;
						continue;
					}
					if (time < 900) {
						text[a] = `/e ${name} 食物时间不足15分钟！`;
						a++;
						continue;
					}
					if (time < 1200) {
						text[a] = `/e ${name} 食物时间不足20分钟！`;
						a++;
						continue;
					}
				}
				if (a==0) return
				PostNamazu('command', '/e =====食物提醒<se.1>====');
				for (const i in text) {
					PostNamazu('command', text[i]);
				}
			},
		},
	],
});
