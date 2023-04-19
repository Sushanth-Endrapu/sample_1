const express=require("express");

const bodyParser=require("body-parser");

const date=require(__dirname+'/dates.js');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.set("view engine",'ejs')

var items=[]

let work_items=[]

app.get("/",function(req,res){
day=date.getDate()
  res.render("list",{ListTitle:day,newItems:items})
  // res.send("hello");
});

app.post('/',function(req,res){
  // console.log(req.body.list);
   let item=req.body.new_item
   if(req.body.list==='Work'){
     work_items.push(item)
     res.redirect('/work')
   }else{
   items.push(item)
   res.redirect('/')
 }
})

app.get("/work",function(req,res){
  res.render('list',{ListTitle:'Work',newItems:work_items})
})

app.get('/about',function(req,res){
  res.render('about')
})

app.listen(3000,function(){
  console.log('server running on port 3000');
});
