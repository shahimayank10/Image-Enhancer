import axios from 'axios'
const API_KEY = "wxyn8mhshqntd258l"; 
const BASE_URL = "https://techhk.aoscdn.com/";

export async function enhancedImageAPi(file) {
  try {
    const task_id=await uploadData(file);

    // console.log(task_id);
    


      const enhancedimage = await PollingfetchData(task_id);

    // console.log("enhance image",enhancedimage);

    return enhancedimage;

  } catch (error) {
    console.log("some error",error.message);
  }
}


const uploadData=async(file)=>{
  const formData = new FormData();
  formData.append("image_file", file);

  const {data}=await axios.post(`${BASE_URL}/api/tasks/visual/scale`,
    formData,
    { headers:{ "X-API-KEY": API_KEY, },  
    }
  );



  if (!data?.data?.task_id){
    return new Error("problem in uploading");
  }

  return data.data.task_id;

}

const fetchData=async (taskId)=>{


  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    { headers: { "X-API-KEY": API_KEY } }
  );

  const result = data?.data;

  if (result.err_message) {
    // console.log(result);    
    throw new Error(result.err_message);
  }

  
  // console.log("Upload success:", result.image);
  return result;



}


 const PollingfetchData= async (task_id, ren=0) => {
 
  const result =await fetchData(task_id);

  if(result.state === 4){
 
    console.log("processing....");
    
    if(ren >=10){
      // console.log("error on generating the image")
      alert("took too much time to generate");
    }

    await new Promise((resolve)=>setTimeout(resolve,2000)) 
    

    return PollingfetchData(task_id,ren+1);

  }

  return result.image;

}


// fetchData("48006e7d-e660-4f0c-a808-836d56f81d59");


