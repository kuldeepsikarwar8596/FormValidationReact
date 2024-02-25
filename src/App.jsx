import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay=(d)=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve()
      },d*1000)
    })
  }

  const onSubmit = async (data)=> {
    await delay(2)
    console.log(data)
  }
  return (
    <>
      {isSubmitting && <div>Lodding...</div>}
        <div className="container">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='username' {...register("username", { required:{value:true, message:" Good"}, minLength:{value:3, message:"MinLength is 3"}, maxLength:{value:8, message:"MaxLength is 8"} })} type="text" name="username" id="" />
            {errors.username && <div className='red'>{errors.username.message}</div>}
            <br />
            <input {...register("password" , {minLength:{value:3, message:"MinLength is 4"}, maxLength:{value:8, message:"MaxLength is 8"} })} type="password" />
            {errors.password && <div className='red'>{errors.password.message}</div>}
            <br />
            <input disabled={isSubmitting} type="submit" value="submit"  />
            
          </form>
        </div>
    </>
  )
}

export default App
