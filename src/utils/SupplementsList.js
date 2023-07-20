import Bufferd1      from '../assets/supplements/Buffered.jpg';
import Bufferd2      from '../assets/supplements/Buffered2.webp';
import Ethyl1        from '../assets/supplements/Ethyl Ester.png';
import Glutamine1     from '../assets/supplements/Glutamine.webp';
import Glutamine2      from '../assets/supplements/Glutamine2.jpg';
import Glutamine3      from '../assets/supplements/Glutamine3.jpeg';
import Liquid         from '/home/aimen/repos/gym_react_app/src/assets/supplements/Liquid .jpg';
import Monchydrate2 from '/home/aimen/repos/gym_react_app/src/assets/supplements/Monohydrate.webp';
import Monchydrate1 from '/home/aimen/repos/gym_react_app/src/assets/supplements/Monohydrate2.jpg';


// import the products adds : 
import one from '../assets/productsadd/one.jpg' ; 
import two from '/home/aimen/repos/gym_react_app/src/assets/productsadd/tow.jpg' ; 
import three from '/home/aimen/repos/gym_react_app/src/assets/productsadd/three.jpg' ; 
import foor from '../assets/productsadd/foor.jpg' ; 

 

const Images = [
    Bufferd1    ,
    Bufferd2    ,
    Ethyl1      ,
    Glutamine1  ,
    Glutamine2  ,
    Glutamine3  ,
    Liquid      ,
    Monchydrate2,
    Monchydrate1] ; 








export const  SupplemenstList = [
    {id : 1 ,name: 'Monohydrate', price : '100$'  ,desc  : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'3' ,  src: Images[7]  , Rating : 1.5} ,  
    {id : 2 ,name: 'Glutamine', price : '70$'     ,desc  : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'0' ,  src: Images[5]  , Rating : 2.5} , 
    {id : 3 ,name: 'Buffered', price : '70$'      ,desc  : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'177' ,src: Images[1]  , Rating : 3} , 
    {id : 4 ,name: 'Monohydrate', price : '50$'   ,desc  : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'41' , src: Images[8]  , Rating : 4} , 
    {id : 5 ,name: 'Ethyl Ester', price : '50$'   , desc : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'55' , src: Images[2]  , Rating : 2} , 
    {id : 6 ,name: 'Buffered', price : '30$'      , desc : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'47' , src: Images[0]  , Rating : 4} , 
    {id : 7 ,name: 'Liquid ', price : '30$'       , desc : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'10' , src: Images[6]  , Rating : 3} , 
    {id : 8 ,name: 'Glutamine', price : '10$'     , desc : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'0' ,  src: Images[4]  , Rating : 2.5} , 
    {id : 9 ,name: 'Glutamine', price : '10$'     , desc : 'The most widely studied form of creatine, known for its effectiveness in improving strength, power, and muscle mass.' , contity:'1' ,  src: Images[3]  , Rating : 1} , 
]

export const Add = [
one , two , three , foor , 
]