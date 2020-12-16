import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./Search.css";
import axion from "axios";
import { Card, CardContent, Divider } from "@material-ui/core";
import { CancelTwoTone } from "@material-ui/icons";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([])

  console.log(result);

  useEffect(() => {
    const search = async () => {
      const data = await axion.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

    //   console.log(data.data.query.search);
      setResult(data.data.query.search)
    };
    const timeout = setTimeout(() => {
        if(term){
            search();
        }
        
    }, 1000);

    return ()=>{
        clearTimeout(timeout)
    }
  }, [term]);

  return (
    <div className="searchbar">
      <TextField
        onChange={(e) => setTerm(e.target.value)}
        name="term"
        className="searchbar__search"
        label="Search"
        variant="outlined"
      />

      {result.map((res, i)=>{
          return <Card> 
                    <CardContent key={i}>
                        <h3
                        > <a href={`https://en.wikipedia.org?cruid=${res.pageid}`}> {res.title} </a>  </h3>
                        <Divider/>
                        <p dangerouslySetInnerHTML={{__html:res.snippet}}/>  
                    </CardContent>
                </Card>
      })}
      
    </div>
  );
};

export default Search;
