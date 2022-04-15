import axios from "axios";
import Papa from "papaparse";
import { HeroInfo, ServiceInfo } from "./types";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: async () =>{
    return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vQn2KRzL4wkD7x-Ok6nivOkxagNNXw-iBsSPSahvgeC4OvPcNbk2egBn--6kGsibJy8iHc2kvADWUPS/pub?output=csv", {
      responseType: "blob"
    }).then(
      response =>{
        return new Promise<HeroInfo>((resolve, reject)=>{
          Papa.parse(response.data, {
            header: true,
            complete: results => {
              const heroInfo = results.data as HeroInfo[]
              return resolve
            },
            error: (error)=> {
              return reject(error.message);
            }
          });
        })
      }
    );
  },
  services: async () =>{
    return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSPjjhy0yRjjVWldOK4RrxqKA46JZxunL6PfJyKh6sljx98mvG2aqYGNSBTcZwlBIKtCjTAZ1oR3FRK/pub?output=csv", {
      responseType: "blob"
    }).then(
      response =>{
        return new Promise<ServiceInfo[]>((resolve, reject)=>{
          Papa.parse(response.data, {
            header: true,
            complete: results => {
              const services = results.data as ServiceInfo[]
              return services
            },
            error: (error)=> {
              return reject(error.message);
            }
          });
        })
      }
    );
  },
};