import {
    WILD_DEVIL,WILD_DEVIL_EXPAND,WILD_DEVIL_TEXT,
    WILD_EXPAND_DOWN_BORDER,WILD_EXPAND_UP_BORDER,
    WILD_EXPAND_MIDDLE_BORDER,FIRE_UP_1,FIRE_UP_2,
    FIRE_UP_3,FIRE_UP_4,FIRE_UP_5,FIRE_UP_6,FIRE_UP_7,
    FIRE_MIDDLE_1,FIRE_MIDDLE_2, FIRE_MIDDLE_3,FIRE_MIDDLE_4,
    FIRE_MIDDLE_5,FIRE_MIDDLE_6,FIRE_MIDDLE_7, FIRE_DOWN_1,
    FIRE_DOWN_2,FIRE_DOWN_3,FIRE_DOWN_4,FIRE_DOWN_5,FIRE_DOWN_6,
    FIRE_DOWN_7,FIRE_UP_0,FIRE_MIDDLE_0,FIRE_DOWN_0
} from "../constants/devil";
import {DIAMOND_OVERLAY,DIAMOND_SHINE,DIAMOND_SUNSHINE
,EXPLOSION_PARTICLE,ONE_PARTICLE,SYMBOL_DIAMOND,WHITE_PARTICLE
} from "../constants/diamon";
import {MELON} from "../constants/melon";
import {BACKGROUND, BACKGROUND_DEVIL, BACKGROUND_DIAMONDS, BACKGROUND_MELON} from "../constants/others";

export const loaderConfig = {
    // Diamond
    [DIAMOND_OVERLAY]: require("../sprites/diamond/Diamond_overlay.png"),
    [DIAMOND_SHINE]:require("../sprites/diamond/Diamond_Shine.png"),
    [EXPLOSION_PARTICLE]:require("../sprites/diamond/Explosion_Particle.png"),
    [ONE_PARTICLE]:require("../sprites/diamond/One_Particle.png"),
    [SYMBOL_DIAMOND]:require("../sprites/diamond/Symbol_diamond.png"),
    [WHITE_PARTICLE]:require("../sprites/diamond/white_particle.png"),
    [DIAMOND_SUNSHINE]:require("../sprites/diamond/Diamond_SunShine.png"),

    //Melon
    [MELON]:require("../sprites/melon/symbol_melon_triple.png"),

    //Devil
    [WILD_DEVIL_EXPAND]:require("../sprites/devil/Wild_expand_bg.png"),
    [WILD_DEVIL]:require("../sprites/devil/Wild.png"),
    [WILD_DEVIL_TEXT]:require("../sprites/devil/Wild_Text.png"),
    //Devil Border
    [WILD_EXPAND_DOWN_BORDER]:require("../sprites/devilBorder/Wild_expand_down.png"),
    [WILD_EXPAND_UP_BORDER]:require("../sprites/devilBorder/Wild_expand_up.png"),
    [WILD_EXPAND_MIDDLE_BORDER]:require("../sprites/devilBorder/Wild_expand_middle.png"),
    // Fire up
    [FIRE_UP_0]:require("../sprites/fire_up/0.png"),
    [FIRE_UP_1]:require("../sprites/fire_up/1.png"),
    [FIRE_UP_2]:require("../sprites/fire_up/2.png"),
    [FIRE_UP_3]:require("../sprites/fire_up/3.png"),
    [FIRE_UP_4]:require("../sprites/fire_up/4.png"),
    [FIRE_UP_5]:require("../sprites/fire_up/5.png"),
    [FIRE_UP_6]:require("../sprites/fire_up/6.png"),
    [FIRE_UP_7]:require("../sprites/fire_up/7.png"),
    // Fire middle
    [FIRE_MIDDLE_0]:require("../sprites/fire_middle/0.png"),
    [FIRE_MIDDLE_1]:require("../sprites/fire_middle/1.png"),
    [FIRE_MIDDLE_2]:require("../sprites/fire_middle/2.png"),
    [FIRE_MIDDLE_3]:require("../sprites/fire_middle/3.png"),
    [FIRE_MIDDLE_4]:require("../sprites/fire_middle/4.png"),
    [FIRE_MIDDLE_5]:require("../sprites/fire_middle/5.png"),
    [FIRE_MIDDLE_6]:require("../sprites/fire_middle/6.png"),
    [FIRE_MIDDLE_7]:require("../sprites/fire_middle/7.png"),
    // Fire down
    [FIRE_DOWN_0]:require("../sprites/fire_down/0.png"),
    [FIRE_DOWN_1]:require("../sprites/fire_down/1.png"),
    [FIRE_DOWN_2]:require("../sprites/fire_down/2.png"),
    [FIRE_DOWN_3]:require("../sprites/fire_down/3.png"),
    [FIRE_DOWN_4]:require("../sprites/fire_down/4.png"),
    [FIRE_DOWN_5]:require("../sprites/fire_down/5.png"),
    [FIRE_DOWN_6]:require("../sprites/fire_down/6.png"),
    [FIRE_DOWN_7]:require("../sprites/fire_down/7.png"),

    //Background main
    [BACKGROUND]:require("../sprites/backgrounds/bg.jpeg"),
    [BACKGROUND_DIAMONDS]:require("../sprites/backgrounds/diamonds_bg.jpg"),
    [BACKGROUND_DEVIL]:require("../sprites/backgrounds/devil_bg.jpg"),
    [BACKGROUND_MELON]:require("../sprites/backgrounds/melon_bg.jpg")

};
