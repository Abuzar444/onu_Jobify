/*In the Context API, a reducer is a function that takes in
 the current state and an action,
 and returns a new state. It's typically used to manage
complex state in a centralized store, similar to how
 Redux works.*/

import { DISPLAY_ALERT, CLEAR_ALERT,

SETUP_USER_BEGIN,
SETUP_USER_SUCCESS,
SETUP_USER_ERROR,
TOGGLE_SIDEBAR,
LOGOUT_USER,
 UPDATE_USER_BEGIN,
 UPDATE_USER_SUCCESS,
 UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOB_BEGIN,
  GET_JOB_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STAT_BEGIN,
  SHOW_STAT_SUCCESS,
  CLEAR_FILTER,
  CHANGE_PAGE

 } from "./actions";
import { initialState } from "./appContext";

const reducer=(state, action)=>{
    if(action.type===DISPLAY_ALERT){
        return{
            ...state,
    
           showAlert:true,
           alertType:"danger",
           alertText:"Please provide all values" 
        }
    }
    if (action.type===SETUP_USER_BEGIN){
        return{
            ...state,
            isLoading:true
        }
    }
    if (action.type===SETUP_USER_SUCCESS){
        return{
            ...state,
            isLoading:false,
            token:action.payload.token,
            user:action.payload.user,
            userLocation:action.payload.location,
            jobLocation:action.payload.location,
            showAlert:true,
            alertType:"success",
            alertText:action.payload.alertText
        }
    }
    if (action.type===SETUP_USER_ERROR){
        return{
            ...state,
            isLoading:false,
           
            showAlert:true,
            alertType:"danger",
            alertText:action.payload.msg
        }
    }
    if(action.type===CLEAR_ALERT){
        return{
            ...state,
           showAlert:false,
           alertType:"",
           alertText:"" 
        }
    }


if (action.type===SETUP_USER_ERROR){
    return{
        ...state,
        isLoading:false,
       
        showAlert:true,
        alertType:"danger",
        alertText:action.payload.msg
    }
}
if (action.type===TOGGLE_SIDEBAR){
    return{
        ...state,
       showSideBar:!state.showSideBar
    }
}
if (action.type===LOGOUT_USER){
    return{
        ...initialState,
       user:null,
       token:null,
       jobLocation:"",
       userLocation:""
    }
}


if (action.type===UPDATE_USER_BEGIN){
    return{
        ...state,
        isLoading:true
    }
}
if (action.type===UPDATE_USER_SUCCESS){
    return{
        ...state,
        isLoading:false,
        token:action.payload.token,
        user:action.payload.user,
        userLocation:action.payload.location,
        jobLocation:action.payload.location,
        showAlert:true,
        
        alertType:"success",
        alertText:"User Profile Updated"
    }
}
if (action.type===UPDATE_USER_ERROR){
    return{
        ...state,
        isLoading:false,
       
        showAlert:true,
        alertType:"danger",
        alertText:action.payload.msg
    }
}

if (action.type===HANDLE_CHANGE){
    return{
        ...state,
        page:1,
        [action.payload.name]:action.payload.value
    }
}

if (action.type===CLEAR_VALUES){
const initialState={
    //jobs
    userLocation:state.userLocation,
    isEditing:false,
    editingJobId:'',
    position:"",
    company:"",
    jobLocation:state.userLocation,
    jobType:"Full-time",
    showSideBar:false,
    status:"Pending",
}

    return{
        ...state,
        ...initialState

    }
}

if (action.type===CREATE_JOB_BEGIN){
    return{
        ...state,
        isLoading:true
    }
}

if (action.type===CREATE_JOB_SUCCESS){
    return{
        ...state,
    
        isLoading:false,
        showAlert:true,
        alertType:"success",
        alertText:"New Job Created"
        
    }
}


if (action.type===CREATE_JOB_ERROR){
    return{
        ...state,
        isLoading:false,
        showAlert:true,
        alertType:"danger",
        alertText:action.payload.msg
        
    }
}

if (action.type===GET_JOB_BEGIN){
    return{
        ...state,
        isLoading:true,
        showAlert:false,
        
    }
}

if (action.type===GET_JOB_SUCCESS){
    return{
        ...state,
        isLoading:false,
        jobs:action.payload.jobs,
        totalJobs:action.payload.totalJobs,
        numOfPages:action.payload.numOfPages
        
    }
}

if (action.type===SET_EDIT_JOB){
    const job=state.jobs.find((job)=>job._id===action.payload.id)
    const {_id, position, company, jobLocation, jobType, status}=job
    return{
        ...state,
        isEditing:true,
        editingJobId:_id,
        position,
         company,
          jobLocation,
           jobType,
            status
    }
}
if(action.type===DELETE_JOB_BEGIN){

return{
...state,
isLoading:true,

}
}

if(action.type===EDIT_JOB_BEGIN){

    return{
    ...state,
    isLoading:true,
    
    }
    }

    if(action.type===EDIT_JOB_SUCCESS){

        return{
        ...state,
        isLoading:false,
        showAlert:true,
        alertType:"success",
        alertText:"Job Updated!"
        
        }
        }


        if(action.type===EDIT_JOB_ERROR){

            return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:"danger",
            alertText:action.payload.msg
            
            }
            }
        
            if(action.type===SHOW_STAT_BEGIN){

                return{
                ...state,
                isLoading:true,
                showAlert:false,
                
                }
                }


                if(action.type===SHOW_STAT_SUCCESS){

                    return{
    ...state,
    isLoading:false,
    showAlert:true,
    stats:action.payload.stats,
     monthlyApplications:action.payload.monthlyApplications
                    
                    }
                    }
            
                    if(action.type===CLEAR_FILTER){

                        return{
        ...state,
        search:"",
        searchStatus: "all",
        searchType: "all",
        sort: "latest"
                        
                        }
                        }
  if(action.type===CHANGE_PAGE){

   return{
  ...state,
  
 page:action.payload.page
   }
}
                

 /*error thrown if we dispatch action not handled in
    our reducer*/
    throw new Error(`no such action: ${action.type}`)

}


export default reducer;