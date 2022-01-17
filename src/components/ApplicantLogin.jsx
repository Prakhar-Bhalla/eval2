import { useState } from "react"

export const ApplicantLogin = () => {
    const[form,setForm] = useState({email : "", mobile: "", password: ""});
    const handleChanges = (event) => {
        let {name,value} = event.target;
        setForm({...form,
            [name] : value,
        })
    }

    return <div style={{width : "120px"}}>
    <input placeholder="Enter Email" value={form.email} name="email" onChange={handleChanges}/>
    <input type="number" placeholder="Enter mobile number" value={form.mobile} name="mobile" onChange={handleChanges}/>
    <input type="password" placeholder="Enter password" value={form.password} name="password" onChange={handleChanges}/>
    </div>
}