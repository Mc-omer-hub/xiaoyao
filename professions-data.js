/* =============================================
   逍遥PVP — 职业完整数据（共享文件）
   供 index.html 和 profession.html 使用
   ============================================= */

const professions = [
    {
        id: 1,
        name: 'PVP战士',
        icon: 'Nether_Star.gif',
        iconType: 'gif',
        difficulty: '低',
        difficultyNum: 1,
        tagline: '均衡入门',
        category: '基础',
        desc: '全套钻石装备、钻石剑、雪球、面包。适合新手熟悉PVP基础的均衡型职业。',
        tabs: [],
        items: [
            { name: '钻石剑', type: 'weapon', icon: null, desc: '耐久附魔9999，可靠的主手武器' },
            { name: '钻石头盔', type: 'armor', icon: null, desc: '保护附魔，耐久9999' },
            { name: '钻石胸甲', type: 'armor', icon: null, desc: '保护附魔，耐久9999' },
            { name: '钻石护腿', type: 'armor', icon: null, desc: '保护附魔，耐久9999' },
            { name: '钻石靴子', type: 'armor', icon: null, desc: '保护附魔，耐久9999' },
            { name: '雪球 ×64', type: 'consumable', icon: 'Snowball_JE3_BE3.png', desc: '远程骚扰与击退' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [],
        equipment: []
    },
    {
        id: 2,
        name: '君焰',
        icon: 'Fire_Charge_JE2_BE2.png',
        difficulty: '低',
        difficultyNum: 2,
        tagline: '烈焰焚天',
        category: '法师',
        desc: '右键释放君焰技能，使半径8格内所有实体着火5秒，每秒2点火焰伤害。金装+保护附魔。',
        tabs: [],
        items: [
            { name: '金剑·炽热之刃', type: 'weapon', icon: null, desc: '锋利1 + 火焰附加1 + 耐久9999' },
            { name: '黄金头盔', type: 'armor', icon: null, desc: '保护2 + 耐久9999' },
            { name: '红色皮革胸甲', type: 'armor', icon: null, desc: '保护3 + 耐久9999' },
            { name: '黄金护腿', type: 'armor', icon: null, desc: '保护2 + 耐久9999' },
            { name: '黄金靴子', type: 'armor', icon: null, desc: '保护2 + 耐久9999' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '君焰',
                icon: 'flame_lord.png',
                desc: '右键释放君焰技能，使半径8格内所有实体着火5秒，每秒2点火焰伤害。释放时产生3层火焰粒子环从施法者向外扩散，脚下爆发火焰粒子，头顶升腾烟雾柱。',
                cd: '14秒',
                type: 'active',
                effects: ['范围着火(5秒)', '每秒2点火焰伤害', '火焰/熔岩/烟雾粒子特效']
            }
        ],
        equipment: []
    },
    {
        id: 3,
        name: '齐天大圣·孙悟空',
        icon: 'wukong.png',
        difficulty: '高',
        difficultyNum: 5,
        tagline: '筋斗云·定海神针·齐天战甲',
        category: '神话',
        desc: '一只身躯鄙陋的猢狲，却拥有无与伦比的神力。筋斗云飞天5秒、定海神针10点伤害、齐天战甲保护8、护身罡气免疫抛射物。集机动、防御、爆发于一身。',
        tabs: ['shenhua'],
        items: [
            { name: '定海神针(金箍棒)', type: 'weapon', icon: 'dinghai.png', desc: '攻击力10点，打满三棒强化后追加2点真实伤害。持握动画。' },
            { name: '齐天战甲', type: 'armor', icon: 'jindou.png', desc: '保护8 + 耐久9999，胸甲槽，锁定背包不可丢弃。齐天大圣专属战甲。' },
            { name: '金头盔', type: 'armor', icon: null, desc: '保护1 + 耐久9999' },
            { name: '仙桃 ×128', type: 'consumable', icon: 'peach.png', desc: '恢复满格饱食度 + 1秒生命恢复II' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '筋斗云',
                icon: 'jindouyun.png',
                desc: '右键瞬间向上飞升并进入飞行状态。飞行持续5秒，飞行期间每tick脚底生成粒子特效。飞行结束后追加4秒免疫摔伤保护。',
                cd: '32秒',
                type: 'active',
                effects: ['飞行5秒', '向上动能2.5', '白色/云粒子特效', '4秒免疫摔伤']
            },
            {
                name: '护身罡气',
                icon: 'hugang.png',
                desc: '右键激活护身罡气，5秒内免疫一切抛射物伤害(箭矢等)，同时获得1秒抗火效果。释放时50个金色粒子爆发，伴随图腾音效。',
                cd: '25秒',
                type: 'active',
                effects: ['免疫抛射物5秒', '抗火1秒', '金色护盾粒子50个', '图腾音效']
            },
            {
                name: '法天象地',
                icon: 'enhance.png',
                desc: '右键激活3秒buff：体型变为5倍巨大化，手持金箍棒时每tick自动缩放，攻击时追加2点真实伤害。',
                cd: '15秒',
                type: 'active',
                available: false,
                effects: ['体型5倍巨大化3秒', '金箍棒追加2点真伤', '自动缩放']
            }
        ],
        equipment: [
            {
                name: '齐天战甲',
                slot: '胸甲',
                icon: 'jindou.png',
                stats: '保护8 | 耐久9999',
                desc: '齐天大圣的战甲，覆盖全身，锁定背包不可丢弃。'
            },
            {
                name: '定海神针',
                slot: '主手',
                icon: 'dinghai.png',
                stats: '攻击力10 | 武器类型:剑',
                desc: '细长精致风格：0.4宽棒身、8道细金环、六层渐进帽端。'
            }
        ]
    },
    {
        id: 4,
        name: '吸血鬼',
        icon: 'vampire.png',
        difficulty: '中',
        difficultyNum: 3,
        tagline: '以血还血·嗜血为生',
        category: '攻防兼备',
        desc: '一个饥渴难耐的魔鬼，每次攻击都能造成吸血。拥有吸血之刃和嗜血狂暴技能。但吸血有冷却限制（5 tick），生命提升仅2级。高风险高回报。',
        tabs: ['gongfang'],
        items: [
            { name: '吸血之刃', type: 'weapon', icon: 'blood_blade.png', desc: '攻击力5点，攻击时恢复造成伤害的0.45倍生命值' },
            { name: '吸血鬼衣袍', type: 'armor', icon: 'vampire_robe.png', desc: '胸甲槽，护甲6/防御2，暗夜贵族衣袍。' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '嗜血狂暴',
                icon: 'blood_rage.png',
                desc: '右键激活嗜血狂暴，获得2秒力量I效果，大幅提升攻击力。配合吸血之刃的吸血机制，在狂暴期间既是输出也是续航。',
                cd: '18秒',
                type: 'active',
                effects: ['力量I 2秒', '配合吸血机制爆发']
            }
        ],
        equipment: [
            {
                name: '吸血鬼衣袍',
                slot: '胸甲',
                icon: 'vampire_robe.png',
                stats: '护甲6 | 防御2 | 耐久9999',
                desc: '暗夜贵族的衣袍，散发不详气息。'
            }
        ]
    },
    {
        id: 5,
        name: '雷神',
        icon: 'lightning.png',
        difficulty: '低',
        difficultyNum: 2,
        tagline: '掌控雷电之力的神明',
        category: '神话',
        desc: '掌控雷电之力的神明，劈开天地的终极力量。雷神之剑附带闪电之力，对闪电伤害有特殊免疫机制。',
        tabs: ['shenhua'],
        items: [
            { name: '雷神之剑', type: 'weapon', icon: null, desc: '攻击力6点，每次攻击召唤闪电。右键释放十字闪电技能：前后左右各3格范围内降下闪电。' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '雷神之剑(被动)',
                icon: 'lightning.png',
                desc: '每次攻击自动召唤闪电打击目标。被动效果，无需手动触发。',
                cd: '无(被动)',
                type: 'passive',
                effects: ['攻击召唤闪电', '闪电伤害免疫机制']
            },
            {
                name: '十字闪电(主动)',
                icon: 'lightning.png',
                desc: '右键释放十字闪电：在自身前后左右各3格范围内同时降下4道闪电，对范围内敌人造成闪电伤害。',
                cd: '较短',
                type: 'active',
                effects: ['4方向十字闪电', '全范围闪电AOE']
            }
        ],
        equipment: []
    },
    {
        id: 6,
        name: '地心武装',
        icon: 'gravity.png',
        difficulty: '中',
        difficultyNum: 3,
        tagline: '军权重压·重力操控',
        category: '攻防兼备',
        desc: '一只生活于地心的军队，为了对抗战争展开了对地心的研究，并且因此掌控了重力。钻石剑+军权重压技能，铁装带保护附魔。',
        tabs: ['gongfang'],
        items: [
            { name: '钻石剑', type: 'weapon', icon: null, desc: '耐久附魔9999' },
            { name: '铁头盔', type: 'armor', icon: null, desc: '保护1 + 耐久9999' },
            { name: '铁胸甲', type: 'armor', icon: 'Invicon_Iron_Chestplate.png', desc: '保护1 + 耐久9999' },
            { name: '铁靴子', type: 'armor', icon: null, desc: '保护1 + 耐久9999' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '军权重压',
                icon: 'gravity_wave.png',
                desc: '右键释放军权重压：自身获得虚弱2秒，半径8格内所有玩家获得缓慢III效果持续10秒。释放时32个重力脉冲粒子爆发。',
                cd: '24秒',
                type: 'active',
                effects: ['自身虚弱2秒', '周围玩家缓慢III 10秒', '32个重力粒子']
            }
        ],
        equipment: []
    },
    {
        id: 7,
        name: '惧留孙佛',
        icon: 'juliusun.png',
        difficulty: '中',
        difficultyNum: 3,
        tagline: '佛袍加身·捆仙索命',
        category: '神话/攻防',
        desc: '阐教玉虚十二仙之一·惧留孙，道场在夹龙山飞云洞。佛袍附带耐久999，捆仙绳技能可束缚敌人。防御型法系职业。',
        tabs: ['shenhua', 'gongfang'],
        items: [
            { name: '捆仙绳', type: 'weapon', icon: 'kunxiansheng.png', desc: '攻击力8点，右键束缚半径4格内玩家1秒，被束缚者无法使用技能。' },
            { name: '佛袍', type: 'armor', icon: 'fopao.png', desc: '胸甲槽，护甲10，耐久9999。惧留孙佛的佛袍，覆盖胸腹及腿部。' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '捆仙绳·束缚',
                icon: 'kunxiansheng.png',
                desc: '右键释放捆仙绳：束缚半径4格内所有玩家1秒。被束缚的玩家无法使用任何技能，是绝佳的控制手段。配合高攻武器进行连招击杀。',
                cd: '10秒',
                type: 'active',
                effects: ['束缚4格内玩家1秒', '被束缚者无法使用技能']
            }
        ],
        equipment: [
            {
                name: '佛袍',
                slot: '胸甲',
                icon: 'fopao.png',
                stats: '护甲10 | 耐久9999',
                desc: '惧留孙佛的佛袍，覆盖胸腹及腿部。'
            }
        ]
    },
    {
        id: 8,
        name: '无畏·玄壁',
        icon: 'xuanbi.png',
        difficulty: '低',
        difficultyNum: 2,
        tagline: '无所畏惧·挡下一切',
        category: '攻防兼备',
        desc: '名为玄壁的阴影，降临于此。无所畏惧，挡下一切。玄柱·断岳攻击力7点，坚固防御型职业。',
        tabs: ['gongfang'],
        items: [
            { name: '玄柱·断岳', type: 'weapon', icon: 'duanyue.png', desc: '攻击力7点，右键获得3秒伤害吸收III效果，CD 11秒。攻守兼备。' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '玄柱·断岳',
                icon: 'duanyue.png',
                desc: '右键释放断岳之力：获得3秒伤害吸收III效果，大幅提升生存能力。配合7点攻击力的武器，在吸收状态下无惧对手反击。',
                cd: '11秒',
                type: 'active',
                effects: ['伤害吸收III 3秒', '大幅减伤']
            }
        ],
        equipment: []
    },
    {
        id: 9,
        name: '狙击手',
        icon: 'Arrow_Loaded_Crossbow_JE1_BE1.png',
        difficulty: '中',
        difficultyNum: 3,
        tagline: '百步穿杨·一击必杀',
        category: '远程',
        desc: '使用十字弩进行远程狙击。拥有不死图腾防身。远程之王。',
        tabs: ['yuancheng'],
        items: [
            { name: '十字弩', type: 'weapon', icon: null, desc: '远程狙击主武器' },
            { name: '箭矢 ×256', type: 'consumable', icon: 'Invicon_Arrow.webp', desc: '弩箭弹药' },
            { name: '不死图腾', type: 'utility', icon: null, desc: '副手装备，死亡时免死一次' },
            { name: '皮革装', type: 'armor', icon: null, desc: '基础皮革护甲' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [],
        equipment: []
    },
    {
        id: 10,
        name: '乌勒尔',
        icon: 'ullr.png',
        difficulty: '中',
        difficultyNum: 3,
        tagline: '寒霜之矢划破长空',
        category: '远程/神话',
        desc: '寒霜之矢划破长空，冬狼的脚步悄无声息。紫杉神弓（力量3+耐久9999），乌勒尔的皮衣（护甲10），铁靴子。',
        tabs: ['yuancheng', 'shenhua'],
        items: [
            { name: '紫杉神弓', type: 'weapon', icon: null, desc: '力量3 + 耐久9999，强大的远程输出武器' },
            { name: '缓慢箭矢 ×256', type: 'consumable', icon: 'Invicon_Arrow.webp', desc: '命中后使目标缓慢，控制型箭矢' },
            { name: '熟兔肉 ×128', type: 'consumable', icon: null, desc: '高效恢复饱食度的食物' },
            { name: '铁靴子', type: 'armor', icon: null, desc: '耐久9999' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [],
        equipment: [
            {
                name: '乌勒尔皮衣',
                slot: '胸甲',
                icon: 'ullr_armor.png',
                stats: '护甲10/8 | 耐久9999',
                desc: '冬青绿与霜白的猎装，隔绝严寒侵蚀。皮衣领口为霜白毛皮，暗金镶边。'
            }
        ]
    },
    {
        id: 11,
        name: '剑士',
        icon: 'swordsman.png',
        difficulty: '中',
        difficultyNum: 3,
        tagline: '火焰之剑·以一敌百',
        category: '特殊',
        desc: '火焰之剑划破长空，剑士以一敌百、所向披靡。圣·制裁技能：向前上方冲刺，落地爆炸造成10点范围伤害，7秒免疫摔伤。',
        tabs: ['teshu'],
        items: [
            { name: '火焰之剑', type: 'weapon', icon: null, desc: '附带火焰效果的主手武器' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '圣·制裁',
                icon: 'holy_sanction.png',
                desc: '右键释放圣·制裁：向前上方冲刺飞行，落地时产生爆炸造成恒定10点范围伤害。爆炸后获得7秒免疫摔伤效果。极具视觉冲击力的终结技。',
                cd: '20秒',
                type: 'active',
                effects: ['爆炸伤害恒定10点', '7秒免疫摔伤', '向上冲刺飞行']
            },
            {
                name: '君焰',
                icon: 'flame_lord.png',
                desc: '右键释放君焰技能，使半径8格内所有实体着火5秒，每秒2点火焰伤害。释放时产生3层火焰粒子环从施法者向外扩散。',
                cd: '14秒',
                type: 'active',
                effects: ['范围着火(5秒)', '每秒2点火焰伤害', '火焰粒子特效']
            }
        ],
        equipment: []
    },
    {
        id: 12,
        name: '暗影刺客',
        icon: 'assassin.png',
        difficulty: '高',
        difficultyNum: 4,
        tagline: '暗影中的致命猎手',
        category: '特殊',
        desc: '暗影之中的致命猎手，瞬移至敌后，一击毙命。刺客之刃攻击力7点，高风险高爆发的近战刺客。',
        tabs: ['teshu'],
        items: [
            { name: '刺客之刃', type: 'weapon', icon: 'assassin_blade.png', desc: '攻击力7点，右键瞬移至最近玩家背后' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '暗影步法(刺客之刃)',
                icon: 'assassin_blade.png',
                desc: '右键使用刺客之刃：瞬间传送至最近玩家背后。从暗影中出现，给予致命一击。高风险高回报，需要在最佳时机使用。',
                cd: '7秒',
                type: 'active',
                effects: ['传送至最近玩家背后', '突袭先手优势']
            }
        ],
        equipment: []
    },
    {
        id: 13,
        name: '狂战士',
        icon: 'berserker.png',
        difficulty: '低',
        difficultyNum: 2,
        tagline: '鲜血即力量',
        category: '特殊',
        desc: '鲜血即力量！血越少伤害越高。纯粹的攻击型职业，放弃防御换取极致的输出能力。',
        tabs: ['teshu'],
        items: [
            { name: '狂战之刃', type: 'weapon', icon: 'blood_blade.png', desc: '攻击力5点，攻击时恢复造成伤害的0.45倍生命值' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '血怒',
                icon: 'blood_rage.png',
                desc: '右键激活血怒：获得2秒力量I效果，大幅提升攻击力。与吸血之刃配合，在狂暴期间既是极致的输出也是有效的续航。',
                cd: '18秒',
                type: 'active',
                effects: ['力量I 2秒', '攻击力大幅提升', '配合吸血续航']
            }
        ],
        equipment: []
    },
    {
        id: 14,
        name: '风行者',
        icon: 'wind_walker.png',
        difficulty: '极高',
        difficultyNum: 5,
        tagline: '疾风过境·瞬息千里',
        category: '特殊',
        desc: '疾风过境，瞬息千里。疾风冲刺技能提供极致机动性。最大生命值降低至15点，高风险换来极速突进能力。',
        tabs: ['teshu'],
        items: [
            { name: '轻甲', type: 'armor', icon: null, desc: '基础轻甲，以速度换防御' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '疾风冲刺',
                icon: 'wind_dash.png',
                desc: '右键朝面朝方向极速冲刺，穿过敌人时造成12点高额伤害。极短的3秒冷却让你可以在战场上灵活穿梭。但代价是最大生命值仅15点。',
                cd: '3秒',
                type: 'active',
                effects: ['冲刺穿过敌人12点伤害', '极高机动性', '最大生命值仅15点']
            }
        ],
        equipment: []
    },
    {
        id: 15,
        name: '歘(chuā)',
        icon: 'chua.png',
        difficulty: '中',
        difficultyNum: 3,
        tagline: '血色疾风·利刃所至',
        category: '特殊',
        desc: '歘——血色疾风，利刃所至，血雾弥漫。腥红盔甲与歘血之刃的组合，在战场上掀起腥风血雨。',
        tabs: ['teshu'],
        items: [
            { name: '歘血之刃', type: 'weapon', icon: 'chua_blade.png', desc: '攻击力2+1魔，攻击不击退。每次攻击给目标附加1层标记，每层标记使自身吸血+1点。标记≥6层时追加8点真实伤害。标记每10秒消退1层。' },
            { name: '腥红战甲', type: 'armor', icon: 'chua_armor.png', desc: '胸甲槽，护甲7。血色浸染的战甲。' },
            { name: '面包 ×128', type: 'consumable', icon: 'Bread_JE3_BE3.png', desc: '战斗中快速恢复饱食度' },
            { name: '回城', type: 'utility', icon: 'skull.png', desc: '食用后自杀回城，自动补回物品' }
        ],
        skills: [
            {
                name: '歘血标记(被动)',
                icon: 'chua_blade.png',
                desc: '每次攻击给目标附加1层「歘血」标记：每层标记使自身吸血+1点。标记叠加至6层时，下次攻击追加8点真实伤害并清除标记。标记每10秒消退1层。独特的叠层爆发机制。',
                cd: '无(被动)',
                type: 'passive',
                effects: ['每次攻击+1层标记', '每层吸血+1点', '≥6层追加8点真伤', '标记10秒消退1层']
            }
        ],
        equipment: [
            {
                name: '腥红战甲',
                slot: '胸甲',
                icon: 'chua_armor.png',
                stats: '护甲7 | 耐久9999',
                desc: '血色浸染的战甲，歘的专属胸甲。'
            }
        ]
    }
];

/* 工具函数 */
function getProfessionById(id) {
    id = parseInt(id);
    return professions.find(p => p.id === id) || null;
}

function getProfessionsByCategory(cat) {
    return professions.filter(p => p.tabs.includes(cat));
}

function getAllProfessions() {
    return professions;
}
