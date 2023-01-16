import { APIService } from "services";

export const getTblquestions = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblquestions(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblquestions(search,pageNo,pageSize);
        } catch(err) {
             return { records:[], totalCount:0 }
        }
    }
    if(res && res.data && res.data.document){
    return res.data.document;
    }else{
    return { records:[], totalCount:0 }
    }
    
}


export const getAllTblquestions = (pageno,pagesize) => {
return APIService.api().get(`/tblquestions/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblquestions = (id) => {
return APIService.api().get(`/tblquestions/read_one.php?id=${id}`)
}
export const searchTblquestions = (key,pageno,pagesize) => {
return APIService.api().get(`/tblquestions/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblquestions = (data) => {
return APIService.api().post(`/tblquestions/create.php`,data)
}
export const updateTblquestions = (data) => {
return APIService.api().post(`/tblquestions/update.php`,data)
}
export const deleteTblquestions = (id) => {
return APIService.api().post(`/tblquestions/delete.php`,{id:id})
}
