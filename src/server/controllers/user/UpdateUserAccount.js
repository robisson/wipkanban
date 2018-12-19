import { OK, INTERNAL_SERVER_ERROR } from "../../utils/HttpStatusCode";
import path from "path";

export default User => {
  function handleError(res, err) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .json({ success: false, error: err })
      .end();
  }

  return (req, res) => {
    let { name, lastname, phone, email, firstAccess } = JSON.parse(
      req.body.user
    );

    let { image } = req.body;
    let _id = req.params.userid;

    User.findById(_id, function(err, user) {
      if (err) handleError(res, err);

      user.name = name;
      user.lastname = lastname;
      user.email = email;
      user.phone = phone;
      user.firstAccess = firstAccess;
      user.image = image;

      user.save(function(err) {
        if (err) handleError(res, err);

        let newImage;

        if (user.image.newFilename) {
          newImage = path.join(process.env.UPLOAD_PATH, user.image.newFilename);
        }

        res
          .status(OK)
          .json({
            success: true,
            imageUser: newImage
          })
          .end();
      });
    });
  };
};
