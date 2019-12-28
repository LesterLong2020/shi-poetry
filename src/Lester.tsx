import React from "react";

interface LesterProps {

}

interface LesterState {

}

export default class extends React.Component<LesterProps, LesterState> {
    constructor(props: LesterProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        let date = new Date();

        return (
            <div>
                金蝉脱壳、抛砖引玉、借刀杀人、以逸待劳、擒贼擒王、趁火打劫、关门捉贼、浑水摸鱼、打草惊蛇、
                瞒天过海、反间计、笑里藏刀、顺手牵羊、调虎离山、李代桃僵、指桑骂槐、隔岸观火、树上开花；
                暗渡陈仓、走为上、假痴不癫、欲擒故纵、釜底抽薪、空城计、苦肉计、远交近攻、反客为主、
                上屋抽梯、偷梁换柱、无中生有、美人计、借尸还魂、声东击西、围魏救赵、连环计、假道伐虢。
                <div>Hello Lester Long {date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()}</div>
            </div>
        )
    }
}
