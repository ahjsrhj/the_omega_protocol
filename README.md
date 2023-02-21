# The Omega Protocol EZgame

绝欧米茄cacbot自定义js触发器，附带3D绘制

本科技讲究的就是一个给大脑按摩，目标是大脑瘫痪、小脑发育不全者都能过绝欧！

记得装cacbotself.dll，少了这个有个别机制会不报



## 更新

**最新进度：P5一运**

2023.2.21.17:51：P1一运完整写完，当前是beta版需要多测试稳定性

2023.2.21.00:22：更新到P5一运自动标记，修复P4换组bug

2023.2.17.23:51：修复小电视全部横排点名时会出现的bug





## 安装

<img src="https://p.sda1.dev/9/494901cebcf8fdee59d787e04812a0d5/QQ截图20230216165431.png" alt="QQ%E6%88%AA%E5%9B%BE20230216165431.png" style="zoom:50%;" />

1、打包下载

2、将里面的txt文件、js文件一起放在你cactbot的user目录下

```
呆萌ACT\Plugins\ACT.OverlayPlugin\cactbot\user\raidboss
```

这是呆萌act的目录，没raidboss这个文件夹就创建一个，注意两个文件一定要放一起

3、重启ACT或者重新加载cacbot

```
如果你要用git方便更新，在raidboss里随便创建一个子文件夹，比如叫"the_omega_protocol"，然后clone进去就行
```



## 配置

*打之前我们需要先设置一下你的使用习惯*

*用vsc或者记事本打开js文件*



关闭填false，开启填true 

#### 总开关

```js
const portOfSplatoon = 47774; 
//splatoon的http端口（后续准备淘汰spl改用ffd了）

const usePostNamazu = true; 
//是否启用鲶鱼精？(关闭后，标记，聊天框播报都用不了)
```

#### 鲶鱼精小队播报开关

```js
const PartyPostNamazu = true; 
//鲶鱼精聊天框全队播报总开关

const P1PostNamazu = true; 
//P1接线踩塔是否鲶鱼精聊天框全队播报

const P2PostNamazu = true; 
//P2狂暴倒计时是否鲶鱼精聊天框全队播报

const P3PostNamazu1 = true; 
//P3HW塔颜色播报

const P3PostNamazu = true; 
//P3小电视站位是否鲶鱼精聊天框全队播报
```



#### 标记开关

```js
const useMark = true; 
//是否启用标记？（需确保鲶鱼精已启用）

const onlyMeMark = true; 
//P1接线标记是否仅自己可见？

const onlyMeMarkP2 = true; 
//P2一运标记是否仅自己可见？

const onlyMeMarkP2_5 = false; 
//P2.5标记是否仅自己可见？

const onlyMeMarkP3 = false; 
//P3小电视点名标记是否仅自己可见？

const onlyMeMarkP5 = false; 
//P5点名标记是否仅自己可见？

const P2一运标记 = { 
  左1: 'attack1',
  左2: 'attack2',
  左3: 'attack3',
  左4: 'attack4',
  右1: 'bind1',
  右2: 'bind2',
  右3: 'bind3',
  右4: 'square',
}
//标记左边用攻击标记，右边锁链，从上到下1234 (因为没有锁链4，所以右4用方块代替)

const P5一运标记={
	外侧1:'attack1',
	外侧2:'attack2',
	内侧1:'stop1',
	内侧2:'stop2',
}
```

#### 打法设置

```js
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
//职业优先级（从上到下依次变低）,和cactbotSelf这个插件设置的优先级完全无关，本js独立
//自己根据自己队伍调整下上下顺序就行

const 索尼 = { 
  圆圈: '第一排',
  叉: '第二排',
  三角: '第三排',
  方块: '第四排',
  倒_圆圈: '第四排',
  倒_叉: '第三排',
  倒_三角: '第二排',
  倒_方块: '第一排',
};
//设置的为从上到下的顺序 ,倒的就是右边拉长线时候的
```



## 说明

以下是本科技会怎么报，以及需要使用哪些打法等

（不需要特殊说明的tts就不在下面拿出来强调了）



### P1

- **踩塔**：直接告诉你踩哪个塔（比如”踩左塔“）

- **拉线**：不会告诉你拉到哪里去，但是会告诉你优先级大还是小
- **拉线标记**：会给当前拉线的两人标记锁链1、2，优先级大的标1，方便看

- **鲶鱼精播报**：（这个一般拿来复盘更多一点）

![QQ%E6%88%AA%E5%9B%BE20230216175031.png](https://p.sda1.dev/9/69a56e0929d5ba961aebd0032468f126/QQ截图20230216175031.png)

- **全能之主**：告诉你去上半场还是下半场



### P2

- **索尼 + 一运击退**：

​		索尼一出来就会按照分组优先级给你标记好

​		左边组从上到下：攻击1234

​		右边组从上到下：锁链123方块 （毕竟没有锁链4捏）

​		（不需要思考是否拉长线要的情况，也不需要考虑点名分组交不交换，告诉你的是你最终要去的位置，科技		都算好了，解放大脑）

​		（一运播报例子）：

![QQ%E6%88%AA%E5%9B%BE20230216180456.png](https://p.sda1.dev/9/707d93398c6673bfe7d42b8c80ff769e/QQ截图20230216180456.png)

- **二运**：没啥好说的，用所有人站一起吃陨石的打法，无脑的一比
- **狂暴倒计时**：

![QQ%E6%88%AA%E5%9B%BE20230216180844.png](https://p.sda1.dev/9/7e9e2227eef48688d3af032b7825870c/QQ截图20230216180844.png)

### P3

- **2.5运标记**：会自动根据优先级给每个人标上标记，看自己标记根据图中站位就行（当然TTS也会报去哪个位置）

<img src="https://p.sda1.dev/9/58c6288c0d5f444560d0ad83d34599ee/QQ截图20230216181407.jpg" alt="QQ%E6%88%AA%E5%9B%BE20230216181407.jpg" style="zoom: 50%;" />

- **HW**：先报塔颜色，然后每一轮卡着时间告诉你怎么走

​		例子：（第一次拉蓝色线）

<img src="https://p.sda1.dev/9/925ecb3b6f65ed77f2bf704f2fb46d3f/QQ截图20230216181822.jpg" alt="QQ%E6%88%AA%E5%9B%BE20230216181822.jpg" style="zoom:50%;" />

- **电视屏幕**：

​		听我说，别用什么XX打法XX打法，都是辣鸡，都给我用天下无敌的十字法，配合我这个科技，你不需要搞懂机制原理，不用看别的攻略，直接做到动一下脑子算我输

![QQ%E6%88%AA%E5%9B%BE20230216185315.jpg](https://p.sda1.dev/9/5605ce6cda5988d40ae673f7271aa2ed/QQ截图20230216185315.jpg)

​		

1. 八个点位如图所示八个白圈（每个人只可能站两个点）

   H1 D3：横排第1或竖排第1

   D1 MT：横排第2或竖排第2

   D2 ST：横排第3或竖排第3

   D4 H2：横排第4或竖排第4

2. **读条出来，科技告诉去哪个点，然后根据科技报的，面朝或者背对boss**，

3. **被点名者最后往tts报的方向（以角色面向为前方）小走一步即可**

4. **（注意！中间四个人要进BOSS目标圈里面，不然会钢铁炸到后面）**

   

   图片1为D2被点名小电视，tts会这么报

   图片2为鲶鱼精小队列表提示走位（最新版已经优化了空格缩进，让中间完全居中）

   ![QQ%E6%88%AA%E5%9B%BE20230216190321.jpg](https://p.sda1.dev/9/d438a526bd1b5e36dfefac7ee9669793/QQ截图20230216190321.jpg)![QQ%E6%88%AA%E5%9B%BE20230216190716.jpg](https://p.sda1.dev/9/d544bcd18954e65b871b4568666e8236/QQ截图20230216190716.jpg)

**开荒tips**：只要你被点名，不管面对还是背对boss，读条结束前请务必停手调整面向（你被点了面对boss，不停手猛打最后角度依然会歪，因为你放小电视的不是在正点上的）

### P4

- 分摊点名：本科技使用打法为MM+W文档打法，即如图中所示站位，点名同一边两个的时候最下面的近战去补位

![QQ%E6%88%AA%E5%9B%BE20230217172903.jpg](https://p.sda1.dev/9/0be39639b79e60ce5a1a311577ab7850/QQ截图20230217172903.jpg)

### P5

#### 一运（莫古力视频打法）

- **标记**：如图所示，连线一出来就会标，根据自己头上的标记去相应位置（交不交插都不影响科技，引导哪个转转手科技不会报，自己去自己该去的，引导方向画图会画）![QQ%E6%88%AA%E5%9B%BE20230221175706.jpg](https://p.sda1.dev/10/3e7c8cfc6b186a37bbb9b37a1f7074fb/QQ截图20230221175706.jpg)

- **流程例子**：其中蓝线近组的tts例子（科技会自动抓取小拳拳出来时每个人的位置判断谁是蓝线远组谁是蓝线近组）![QQ%E6%88%AA%E5%9B%BE20230221182144.jpg](https://p.sda1.dev/10/c7dbb27d3063036e5beeed1ca823b09f/QQ截图20230221182144.jpg)

- **画图**：

1. 转转手引导位置（左还是右）
2. BOSS小电视半场
3. 左右刀范围
4. 你好世界近或远的钢铁aoe范围
