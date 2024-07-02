import Ticket from "../../models/Ticket";
import AppError from "../../errors/AppError";
import Contact from "../../models/Contact";
import User from "../../models/User";
import Queue from "../../models/Queue";
import Tag from "../../models/Tag";
import Whatsapp from "../../models/Whatsapp";

const ShowTicketService = async (
  id: string | number,
  companyId: number
): Promise<Ticket> => {
  const ticket = await Ticket.findOne({
    where: {
      id
    },
    include: [
      {
        model: Contact,
        as: "contact",
<<<<<<< HEAD
        attributes: ["id", "name", "number", "email", "profilePicUrl", "presence"],
=======
        attributes: ["id", "name", "number", "email", "profilePicUrl", "presence", "disableBot"],
>>>>>>> 61662d95e84f35a5f19cedd3fb5447b092cc70c7
        include: ["extraInfo"]
      },
      {
        model: User,
        as: "user",
        attributes: ["id", "name"]
      },
      {
        model: Queue,
        as: "queue",
        attributes: ["id", "name", "color"]
      },
      {
        model: Whatsapp,
        as: "whatsapp",
        attributes: ["name", "facebookUserToken", "facebookUserId"]
      },
      {
        model: Tag,
        as: "tags",
        attributes: ["id", "name", "color"]
      }
    ]
  });

  if (ticket?.companyId !== companyId) {
    throw new AppError("Não é possível consultar registros de outra empresa");
  }

  if (!ticket) {
    throw new AppError("ERR_NO_TICKET_FOUND", 404);
  }

  return ticket;
};

export default ShowTicketService;
