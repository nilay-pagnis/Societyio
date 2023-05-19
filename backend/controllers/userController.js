//@desc   Get users
//@route  Get/home/user
//@access Private

const getUsers = async (req, res) => {
    try{
        res.status(200).json({ message: "get users" });
    } catch(error){
       res.status(400);
       throw new Error(`please add a text fiels ${error}`);
    }
 
};

const setUser = async (req, res) => {
    try {
            const createdUser = await res.status(200).json({ message: "set users" });
            //console.log(createdUser)
    } catch(error) {
        console.log(error);
        //throw new Error(`please add a text fiels`);
    }
  
  
};

module.exports = {
  getUsers,
  setUser,
};
