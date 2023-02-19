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

var time = 0;
var party_time = {};

Options.Triggers.push({
	zoneId: ZoneId.MatchAll,
	triggers: [
		{
			id: '食物检测',
			netRegex: /戦闘開始まで/,
			suppressSeconds: 40,
			promise: async (data, matches) => {
				let boss = await callOverlayHandler({
					call: 'getCombatants',
				});
				time = 0;
				party_time = {};

				let me = boss.combatants[0];
				let buff = me.Effects;
				for (const i in buff) {
					if (Number(buff[i].BuffID) == 48) {
						time = Number(buff[i].Timer);
						break;
					}
				}

				let party = [];
				for (let i in boss) {
					if (boss[i].WorldName != null) {
						party.push(boss[i]);
					}
				}
				if (party.length == 8) {
					for (const i in party) {
						if (party[i].Name == me.Name) continue;
						let buffs = party[i].Effects;
						for (const j in buffs) {
							if (Number(buffs[j].BuffID) == 48) {
								party_time[party[i].Name] = Number(buffs[j].Timer);
								break;
							}
						}
					}
				}
			},
			alertText: () => {
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
			},
			run: () => {
				let text = [];
				let a = 0;
				for (const i in party_time) {
					let _time = party_time[i];
					if (_time == 0) {
						text[a] = `${i} 当前没有食物！`;
						continue;
					}
					if (_time < 300) {
						text[a] = `${i} 食物时间不足5分钟！`;
						continue;
					}
					if (_time < 600) {
						text[a] = `${i} 食物时间不足10分钟！`;
						continue;
					}
					if (_time < 900) {
						text[a] = `${i} 食物时间不足15分钟！`;
						continue;
					}
					a++;
				}
				PostNamazu('command', '=====食物提醒<se.1>====');
				for (const i in text) {
					PostNamazu('command', text[i]);
				}
			},
		},
	],
});
