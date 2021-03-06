import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../../app";
import { BAD_REQUEST, CREATED } from "../../../utils/HttpStatusCode";

chai.use(chaiHttp);

const request = chai.request.agent(app);

//Our parent block
describe("User Account", () => {
  let fields: any, dataAuthenticated: any;

  beforeEach(() => {
    fields = {
      email: "teste@teste.com",
      password: "mypassword"
    };
  });

  test("/POST it should to create a account user", done => {
    request
      .post("/api/v1/user")
      .send(fields)
      .end((err, res: any) => {
        expect(res.statusCode).toEqual(CREATED);

        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual(
          "User account created with successfull!"
        );

        done();
      });
  });

  test("/POST testing user that already exists, do not create", done => {
    request
      .post("/api/v1/user")
      .send(fields)
      .end((err, res: any) => {
        expect(res.statusCode).toEqual(BAD_REQUEST);
        expect(res.body.success).toEqual(false);
        expect(res.body.message).toEqual("User already exists");

        done();
      });
  });

  test("/POST it should to login user and return token user", done => {
    request
      .post("/api/v1/login")
      .send(fields)
      .end((err, res: any) => {
        dataAuthenticated = res.body;

        expect(res.statusCode).toEqual(200);
        expect(dataAuthenticated.success).toEqual(true);
        expect(dataAuthenticated.message).toEqual(
          "Login succesfull! Redirecting..."
        );
        expect(dataAuthenticated).toHaveProperty("token");

        expect(dataAuthenticated).toHaveProperty("user");

        done();
      });
  });

  test("/POST it should to update user and return token user", done => {
    let updateFields = {
      image: "/images/user.png",
      token: dataAuthenticated.token,
      user: JSON.stringify({
        name: "Name",
        lastname: "lastname",
        email: "teste@teste.com",
        phone: 999999,
        firstAccess: false
      })
    };
    request
      .put(`/api/v1/user/${dataAuthenticated.user._id}`)
      .type("form")
      .send(updateFields)
      .end((err, res: any) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(true);
        done();
      });
  });

  test("/POST it should to delete account user", done => {
    request
      .delete("/api/v1/user")
      .send({
        email: fields.email,
        token: dataAuthenticated.token
      })
      .end((err, res: any) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual(
          "User account deleted with successfull!"
        );

        done();
      });
  });
});
