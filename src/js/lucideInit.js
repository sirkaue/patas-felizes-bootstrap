import {
  createIcons,
  HandHeart,
  Heart,
  Mail,
  MapPin,
  Menu,
  NotebookPen,
  PawPrint,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide";

export function lucideInit() {
  createIcons({
    icons: {
      PawPrint,
      Menu,
      Heart,
      HandHeart,
      NotebookPen,
      ShieldCheck,
      UserRound,
      Mail,
      Phone,
      MapPin,
    },
  });
}
