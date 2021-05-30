class Listview{
    imgSrc: string;
    desc: string; 
    dist: string;
    name : string;

   

    constructor(img?:string,gdesc?:string,gdist?:string,gname:?string){
        this.imgSrc=img;
        this.desc = gdesc;
        this.dist = gdist;
        this.name = gname;

    }

    get img()
    {return this.imgSrc;}
    get description()
    {return this.desc;}
    get distance()
    {return this.dist;}
    get placeName()
    {return this.name;}

}