import React, { useState } from 'react';

export const Contact = () => {
    const [vals, setVals] = useState({
            fio: "",
            address: "",
            email: "",
            phone: "",
            comment: ""
    });

    const handleChange = (e) => {
        setVals(oldVals => ({
            ...oldVals, 
            [e.target.name]: e.target.value
        }));
        if(vals.email.includes("@gmail.co")){
            alert("Регистрация пользователей с таким почтовым адресом (@gmail.com) невозможна!")
            setVals(newVals => ({
                ...newVals, 
                [e.target.email]: e.target.value = ""
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            console.log(
                ' ФИО: ' + e.target.fio.value + 
                " Адрес: " + e.target.address.value +
                " Email: " + e.target.email.value +
                " Тел: " + e.target.phone.value +
                " Комментарий: " + e.target.comment.value
            )
        // *If server getting data* 
        // if(vals){
        //     fetch('http://localhost:3001/', {
        //         method: 'post',
        //         headers: {
        //             'Content-Type': 'application/json;charset=utf-8'
        //         },
        //         body: JSON.stringify(vals)
        //     }).then(() => {
        //         console.log("Form was sent")
        //     })
        // }
    }

    return (
    <div className="form">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit} id="form">
            <label htmlFor="fullName">
                <input
                value={vals.fio}
                type="text"
                name="fio"
                id="fullName"
                onChange={handleChange}
                placeholder="ФИО"
                required 
                />
            </label>

            <label htmlFor="address">
                <input
                value={vals.address}
                type="text" 
                id="address"
                name="address"
                onChange={handleChange}
                placeholder="Адрес"
                />
            </label>

            <label htmlFor="email">
                <input 
                value={vals.email}
                type="email" 
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                />
            </label>

            <label htmlFor="phone">
                <input 
                value={vals.phone}
                type="tel" 
                id="phone"
                name="phone"
                onChange={handleChange}
                placeholder="89136779431"
                pattern="8[0-9]{10}"
                required
                />
            </label>

            <label htmlFor="comment">
                <input 
                value={vals.comment}
                type="text" 
                id="comment"
                name="comment"
                onChange={handleChange}
                placeholder="Комментарий"
                />
            </label>

            <button type="submit" name="form-send">Submit</button>
        </form>
    </div>
)};