import  {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
           state.quantity +=1
           state.products.push(action.payload)
           state.total +=action.payload.price*action.payload.quantity
        },
        addQuantity:(state,action)=>{
            if(action.payload.quantity<5){
                const updatedState=state.products.map((item)=>(
                    item.quantity<5 &&  item._id===action.payload.id ? {...item,quantity:item.quantity+1} : item
                  ))
                  let AdditionalAmount=0
                  updatedState.map((item)=>(
                      item._id===action.payload.id ?AdditionalAmount=item.price : null 
                  ))
                  state.products=updatedState
                  state.total+=parseInt(AdditionalAmount) 
            }
        },
        removeQuantity:(state,action)=>{
            if(action.payload.quantity>1){
                const updatedState=state.products.map((item)=>(
                    item.quantity >1 &&  item._id===action.payload.id?{...item,quantity:item.quantity-1}:item
                  ))
                  let AdditionalAmount=0 
                  updatedState.map((item)=>(
                      item._id===action.payload.id ? AdditionalAmount=item.price : null 
                  ))
                  state.products=updatedState
                  state.total-=AdditionalAmount
            }
        }

    }
})

export const {addProduct,addQuantity,removeQuantity} = cartSlice.actions
export default cartSlice.reducer