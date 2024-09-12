const Page = () => {

    const handleForm = async (formData) => {
        "use server";
        console.log(formData)
        const username = formData.get("username")
        console.log("helo", username);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="username" placeholder="username"/>
                <button>send</button>
            </form>
        </div>
    )
};

export default Page ;