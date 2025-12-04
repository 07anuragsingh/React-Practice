// JSX with Curly Braces


export default function UseCurlyBraces(){
    // User variable with Jsx
    const username ="Anurag"

    // Function with jsx
     function sum(a,b){
        return a+b;
    }

    // Condition inside Jsx
    function calculate(a,b,c){
        if(c=="+"){
            return a+b;
        }
        else if(c=="-"){
            return a-b;
        }
        else{
            return a*b;
        }
    }
    

    // Object and Array with JSX
    const obj={
        name:"anura",
        email :"anutest@gmail.com",
        age :45
    };
    const ary=["anurag","anutest.@array",36];
    return(
        <>
        <h1>{username}</h1>
        <h2>Sum Function :{sum(1,6)}</h2>
        <h2>Conditional Calculation :{calculate(4,78,"-")}</h2>
        <h2>Object in Jsx:{obj.age}</h2>
        <h2>Array in jsx: {ary[2]}</h2>
        </>
    )
}