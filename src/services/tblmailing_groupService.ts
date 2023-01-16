import { APIService } from "services";

export const getTblmailing_Group = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblmailing_Group(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblmailing_Group(search,pageNo,pageSize);
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


export const getAllTblmailing_Group = (pageno,pagesize) => {
return APIService.api().get(`/tblmailing_group/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblmailing_Group = (id) => {
return APIService.api().get(`/tblmailing_group/read_one.php?id=${id}`)
}
export const searchTblmailing_Group = (key,pageno,pagesize) => {
return APIService.api().get(`/tblmailing_group/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblmailing_Group = (data) => {
return APIService.api().post(`/tblmailing_group/create.php`,data)
}
export const updateTblmailing_Group = (data) => {
return APIService.api().post(`/tblmailing_group/update.php`,data)
}
export const deleteTblmailing_Group = (id) => {
return APIService.api().post(`/tblmailing_group/delete.php`,{id:id})
}
