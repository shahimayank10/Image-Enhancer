import axios from 'axios'
const API_KEY = "wx1jkcv12jtkqtun2";
const BASE_URL = "https://techhk.aoscdn.com/";

export async function enhancedImageAPi(file) {
  try {
    const task_id=await uploadData(file);


      const enhancedimage = await fetchData(task_id);

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

      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await delay(4000);
      
  console.log(data);

  if (!data?.data?.task_id){
    return new Error("problem in uploading");
  }

  return data.data.task_id;

}

const fetchData=async (taskId)=>{


try {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    { headers: { "X-API-KEY": API_KEY } }
  );

  const result = data?.data;

  if (result.err_message) {
    // console.log(result);    
    throw new Error(result.err_message);
  }

  if (result.state !== 1 || !result.image) {
    // console.log("Still processing or failed:", result);
     throw new Error("fail in generating image");
  }

  console.log("Upload success:", result.image);
  return result.image;


} catch (error) {
  alert("Error fetching result:"+ error.message);
  return null;
}


}

// fetchData("f28832fc-2d5a-4777-a8fa-d200eaff8c5c");