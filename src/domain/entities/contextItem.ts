import { Prop,Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({_id:false})
export class ContextItem{
    @Prop({ required:true })
    setence:string;

    @Prop({ required:true })
    translation:string;

    @Prop({ required:true })
    explanation:string;

} 