import { useState, useEffect } from 'react';
import instance from './Axios';

const useApis = () => {
   const [stateList, setStateList] = useState([]);
   const [filter, setFilter] = useState([]);   

   const buttons = [ "2006" , "2007" , "2008" , "2008" , "2008" , "2009" ,"2010" ,"2011" , "2012" , "2013"
   , "2014" , "2015" , "2015" , "2016" , "2017" , "2018" , "2019" , "2020" ];

   const btnLaunch = [ "true" , "false" ];

   useEffect(() => {

       getList();

     }, []);


    const getList = async() => {
        try{
            let response = await instance.get('/')      
            console.log("Response",response.data);
            setStateList(response.data);  
            setFilter(response.data);                  
            return response;
          }catch(e){
            console.log(e);
           }     
         }        

      const filterYearList = (e) => {
        let filter;
        filter = stateList.filter(item => item.launch_year === e.target.value)
        setFilter(filter);       
       
      };

      const FilterFalse = (e) => {
        let falsy = stateList.filter(item => !item.launch_success);        
        setFilter(falsy); 
        
      };

      const FilterTrue = (e) => {
        let truthy = stateList.filter(item => item.launch_success);      
        setFilter(truthy);      

        
      };

  return{
    stateList,
    getList,
    setStateList,
    filter,
    buttons ,
    filterYearList, 
    btnLaunch,
    FilterTrue,
    FilterFalse
    
  }
}

export default useApis;
