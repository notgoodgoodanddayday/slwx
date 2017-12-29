export class Color{
    colors = [
        '#d2d6de',
        '#99d9ff',
        '#3db8ff',
        '#2ea2e6',
        '#00c0ef',
        '#68b1db',
        '#3c8dbc',
        '#2671bd',
        '#0467a0',
        '#104f73'
    ];

    constructor(type?){
        if(type == 'random'){
            this.colors.sort(() =>{
                return 0.5 - Math.random();
            });
        }
    }

    pop(){
        return this.colors.pop();
    }

    get(index){
        return this.colors[index];
    }

}