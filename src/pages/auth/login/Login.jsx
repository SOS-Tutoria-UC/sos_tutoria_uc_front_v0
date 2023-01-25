import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Spinner } from "../../../components/spinner/Spinner";

//Axios
import instance from "../../../config/axios/instance";

//Components
import Toast from "../../../layout/components/Toast";

//Hooks
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");

  const { handleSetAuth } = useAuth();
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    const oauth = () => {
      if (!localStorage.getItem("access_token"))
        if (code === null) {
          window.location.replace(
            "http://internetofus.u-hopper.com/prod/hub/frontend/oauth/login?client_id=NqGWkPYgkE"
          );
        } else {
          instance
            .post("/auth/oauth", {
              url: "https://internetofus.u-hopper.com/prod/api/oauth2/token",
              code: code,
            })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access_token);
              instance
                .get(`/users/wenet-profile`)
                .then((response) => {
                  console.log(response.data);
                  handleSetAuth(response.data);
                  setLoading(false);
                  navigate("/user");
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
      else {
        instance
          .get(`/users/wenet-profile`)
          .then((response) => {
            handleSetAuth(response.data);
            setLoading(true);
            navigate("/user");
          })
          .catch((error) => {
            console.log(error.response);
            localStorage.removeItem("access_token");
            setLoading(true);
            window.location.replace(
              "http://internetofus.u-hopper.com/prod/hub/frontend/oauth/login?client_id=NqGWkPYgkE"
            );
          });
      }
    };
    oauth();
  }, [code]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //Campos obligatorios
    if ([user.email, user.password].includes("")) {
      console.log("Todos los campos son obligatorios!");
    }

    instance
      .post("/auth/login", user)
      .then((response) => {
        localStorage.setItem("access_token", response.data.acess_token);
        handleSetAuth(response.data);
        console.log(response.data);
        setLoading(false);
        navigate("/user");
      })
      .catch((error) => {
        console.log(error.response);
        setError(error.response.data);
      });
  };

  if (loading) return <Spinner message="Porbando" />;

  return <p></p>;
};

export default Login;
