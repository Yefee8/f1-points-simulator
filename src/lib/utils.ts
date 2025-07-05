import { Standing } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getActiveStandings(){
  const activeStandings: Standing[] = [
    { position: 1, driver: { name: 'O. Piastri', image: '/drivers/piastri.jpg', country: '🇦🇺' }, team: { name: 'McLaren', logo: '/teams/mclaren.png', color: '#FF8000' }, points: 216},
    { position: 2, driver: { name: 'L. Norris', image: '/drivers/norris.jpg', country: '🇬🇧' }, team: { name: 'McLaren', logo: '/teams/mclaren.png', color: '#FF8000' }, points: 201},
    { position: 3, driver: { name: 'M. Verstappen', image: '/drivers/verstappen.jpg', country: '🇳🇱' }, team: { name: 'Red Bull', logo: '/teams/redbull.png', color: '#3671C6' }, points: 155},
    { position: 4, driver: { name: 'G. Russell', image: '/drivers/russell.jpg', country: '🇬🇧' }, team: { name: 'Mercedes', logo: '/teams/mercedes.png', color: '#27F4D2' }, points: 146},
    { position: 5, driver: { name: 'C. Leclerc', image: '/drivers/leclerc.jpg', country: '🇲🇨' }, team: { name: 'Ferrari', logo: '/teams/ferrari.png', color: '#E8002D' }, points: 119},
    { position: 6, driver: { name: 'L. Hamilton', image: '/drivers/hamilton.jpg', country: '🇬🇧' }, team: { name: 'Ferrari', logo: '/teams/ferrari.png', color: '#E8002D' }, points: 91},
    { position: 7, driver: { name: 'A.K. Antonelli', image: '/drivers/antonelli.jpg', country: '🇮🇹' }, team: { name: 'Mercedes', logo: '/teams/mercedes.png', color: '#27F4D2' }, points: 63},
    { position: 8, driver: { name: 'A. Albon', image: '/drivers/albon.jpg', country: '🇹🇭' }, team: { name: 'Williams', logo: '/teams/williams.png', color: '#64C4FF' }, points: 42},
    { position: 9, driver: { name: 'E. Ocon', image: '/drivers/ocon.jpg', country: '🇫🇷' }, team: { name: 'Haas', logo: '/teams/haas.png', color: '#B6BABD' }, points: 23},
    { position: 10, driver: { name: 'N. Hülkenberg', image: '/drivers/hulkenberg.jpg', country: '🇩🇪' }, team: { name: 'Kick Sauber', logo: '/teams/sauber.png', color: '#52E252' }, points: 22},
    { position: 11, driver: { name: 'I. Hadjar', image: '/drivers/hadjar.jpg', country: '🇫🇷' }, team: { name: 'RB', logo: '/teams/rb.png', color: '#6692FF' }, points: 21},
    { position: 12, driver: { name: 'L. Stroll', image: '/drivers/stroll.jpg', country: '🇨🇦' }, team: { name: 'Aston Martin', logo: '/teams/astonmartin.png', color: '#229971' }, points: 14},
    { position: 13, driver: { name: 'F. Alonso', image: '/drivers/alonso.jpg', country: '🇪🇸' }, team: { name: 'Aston Martin', logo: '/teams/astonmartin.png', color: '#229971' }, points: 14},
    { position: 14, driver: { name: 'C. Sainz Jr.', image: '/drivers/sainz.jpg', country: '🇪🇸' }, team: { name: 'Williams', logo: '/teams/williams.png', color: '#64C4FF' }, points: 13},
    { position: 15, driver: { name: 'L. Lawson', image: '/drivers/lawson.jpg', country: '🇳🇿' }, team: { name: 'RB', logo: '/teams/rb.png', color: '#6692FF' }, points: 12},
    { position: 16, driver: { name: 'P. Gasly', image: '/drivers/gasly.jpg', country: '🇫🇷' }, team: { name: 'Alpine', logo: '/teams/alpine.png', color: '#FF87BC' }, points: 11},
    { position: 17, driver: { name: 'Y. Tsunoda', image: '/drivers/tsunoda.jpg', country: '🇯🇵' }, team: { name: 'Red Bull', logo: '/teams/redbull.png', color: '#3671C6' }, points: 10},
    { position: 18, driver: { name: 'O. Bearman', image: '/drivers/bearman.jpg', country: '🇬🇧' }, team: { name: 'Haas', logo: '/teams/haas.png', color: '#B6BABD' }, points: 6},
    { position: 19, driver: { name: 'G. Bortoleto', image: '/drivers/bortoleto.jpg', country: '🇧🇷' }, team: { name: 'Kick Sauber', logo: '/teams/sauber.png', color: '#52E252' }, points: 4},
    { position: 20, driver: { name: 'F. Colapinto', image: '/drivers/colapinto.jpg', country: '🇦🇷' }, team: { name: 'Alpine', logo: '/teams/alpine.png', color: '#FF87BC' }, points: 0},
    { position: 21, driver: { name: 'J. Doohan', image: '/drivers/doohan.jpg', country: '🇦🇺' }, team: { name: 'Alpine', logo: '/teams/alpine.png', color: '#FF87BC' }, points: 0},
  ];

  // gonna use F1-API-JSON here. https://github.com/yashkathe/F1-API-JSON https://npmjs.com/package/f1-api-node

  return activeStandings;
}