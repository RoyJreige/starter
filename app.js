 const express=require('express');
 const morgan=require('morgan');
 const tourRouter=require('./routes/tourRoutes')
 const userRouter=require('./routes/userRoutes')
 
//1) Middleware
const app=express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req,res,next)=>{
    console.log("hello from the middleware");
    next();
});

app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
    next();
});

// app.get('/', (req,res)=>{
//     res.status(200).json({message:"hello from the server",app:'Natours'});
// });

// app.post('/',(req,res)=>{
//     res.send("You can post to this endpoint.");
// });



//2) Route Handlers

//app.get('/api/v1/tours',getAllTours);

//app.get('/api/v1/tours/:id',getTour);

// app.post('/api/v1/tours',createTour);

//  app.patch('/api/v1/tours/:id',updateTour);

//  app.delete('/api/v1/tours/:id',deleteTour);

//3)Routes


app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

module.exports=app;