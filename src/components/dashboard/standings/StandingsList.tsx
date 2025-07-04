import { Standing } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// F1 2025 Complete Standings Data
const f1Standings: Standing[] = [
  { position: 1, driver: { name: 'O. Piastri', image: '/drivers/piastri.jpg', country: '🇦🇺' }, team: { name: 'McLaren', logo: '/teams/mclaren.png', color: '#FF8000' }, points: 216, wins: 5, podiums: 9 },
  { position: 2, driver: { name: 'L. Norris', image: '/drivers/norris.jpg', country: '🇬🇧' }, team: { name: 'McLaren', logo: '/teams/mclaren.png', color: '#FF8000' }, points: 201, wins: 3, podiums: 9 },
  { position: 3, driver: { name: 'M. Verstappen', image: '/drivers/verstappen.jpg', country: '🇳🇱' }, team: { name: 'Red Bull', logo: '/teams/redbull.png', color: '#3671C6' }, points: 155, wins: 2, podiums: 5 },
  { position: 4, driver: { name: 'G. Russell', image: '/drivers/russell.jpg', country: '🇬🇧' }, team: { name: 'Mercedes', logo: '/teams/mercedes.png', color: '#27F4D2' }, points: 146, wins: 1, podiums: 5 },
  { position: 5, driver: { name: 'C. Leclerc', image: '/drivers/leclerc.jpg', country: '🇲🇨' }, team: { name: 'Ferrari', logo: '/teams/ferrari.png', color: '#E8002D' }, points: 119, wins: 0, podiums: 4 },
  { position: 6, driver: { name: 'L. Hamilton', image: '/drivers/hamilton.jpg', country: '🇬🇧' }, team: { name: 'Ferrari', logo: '/teams/ferrari.png', color: '#E8002D' }, points: 91, wins: 0, podiums: 0 },
  { position: 7, driver: { name: 'A.K. Antonelli', image: '/drivers/antonelli.jpg', country: '🇮🇹' }, team: { name: 'Mercedes', logo: '/teams/mercedes.png', color: '#27F4D2' }, points: 63, wins: 0, podiums: 1 },
  { position: 8, driver: { name: 'A. Albon', image: '/drivers/albon.jpg', country: '🇹🇭' }, team: { name: 'Williams', logo: '/teams/williams.png', color: '#64C4FF' }, points: 42, wins: 0, podiums: 0 },
  { position: 9, driver: { name: 'E. Ocon', image: '/drivers/ocon.jpg', country: '🇫🇷' }, team: { name: 'Haas', logo: '/teams/haas.png', color: '#B6BABD' }, points: 23, wins: 0, podiums: 0 },
  { position: 10, driver: { name: 'N. Hülkenberg', image: '/drivers/hulkenberg.jpg', country: '🇩🇪' }, team: { name: 'Kick Sauber', logo: '/teams/sauber.png', color: '#52E252' }, points: 22, wins: 0, podiums: 0 },
  { position: 11, driver: { name: 'I. Hadjar', image: '/drivers/hadjar.jpg', country: '🇫🇷' }, team: { name: 'RB', logo: '/teams/rb.png', color: '#6692FF' }, points: 21, wins: 0, podiums: 0 },
  { position: 12, driver: { name: 'L. Stroll', image: '/drivers/stroll.jpg', country: '🇨🇦' }, team: { name: 'Aston Martin', logo: '/teams/astonmartin.png', color: '#229971' }, points: 14, wins: 0, podiums: 0 },
  { position: 13, driver: { name: 'F. Alonso', image: '/drivers/alonso.jpg', country: '🇪🇸' }, team: { name: 'Aston Martin', logo: '/teams/astonmartin.png', color: '#229971' }, points: 14, wins: 0, podiums: 0 },
  { position: 14, driver: { name: 'C. Sainz Jr.', image: '/drivers/sainz.jpg', country: '🇪🇸' }, team: { name: 'Williams', logo: '/teams/williams.png', color: '#64C4FF' }, points: 13, wins: 0, podiums: 0 },
  { position: 15, driver: { name: 'L. Lawson', image: '/drivers/lawson.jpg', country: '🇳🇿' }, team: { name: 'RB', logo: '/teams/rb.png', color: '#6692FF' }, points: 12, wins: 0, podiums: 0 },
  { position: 16, driver: { name: 'P. Gasly', image: '/drivers/gasly.jpg', country: '🇫🇷' }, team: { name: 'Alpine', logo: '/teams/alpine.png', color: '#FF87BC' }, points: 11, wins: 0, podiums: 0 },
  { position: 17, driver: { name: 'Y. Tsunoda', image: '/drivers/tsunoda.jpg', country: '🇯🇵' }, team: { name: 'Red Bull', logo: '/teams/redbull.png', color: '#3671C6' }, points: 10, wins: 0, podiums: 0 },
  { position: 18, driver: { name: 'O. Bearman', image: '/drivers/bearman.jpg', country: '🇬🇧' }, team: { name: 'Haas', logo: '/teams/haas.png', color: '#B6BABD' }, points: 6, wins: 0, podiums: 0 },
  { position: 19, driver: { name: 'G. Bortoleto', image: '/drivers/bortoleto.jpg', country: '🇧🇷' }, team: { name: 'Kick Sauber', logo: '/teams/sauber.png', color: '#52E252' }, points: 4, wins: 0, podiums: 0 },
  { position: 20, driver: { name: 'F. Colapinto', image: '/drivers/colapinto.jpg', country: '🇦🇷' }, team: { name: 'Alpine', logo: '/teams/alpine.png', color: '#FF87BC' }, points: 0, wins: 0, podiums: 0 },
  { position: 21, driver: { name: 'J. Doohan', image: '/drivers/doohan.jpg', country: '🇦🇺' }, team: { name: 'Alpine', logo: '/teams/alpine.png', color: '#FF87BC' }, points: 0, wins: 0, podiums: 0 },
];

export function StandingsList() {
  return (
    <div className="flex flex-col gap-2rem">
      <h2 className="text-2rem font-semibold text-foreground">
        2025 Standings
      </h2>
      
      <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Rank</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead className="text-right">Points</TableHead>
              <TableHead className="text-right">Wins</TableHead>
              <TableHead className="text-right">Podiums</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {f1Standings.map((standing) => (
              <TableRow key={standing.position} className="hover:bg-muted/50">
                <TableCell className="font-medium text-center">
                  {standing.position}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-1 h-8 rounded-full flex-shrink-0"
                      style={{ backgroundColor: standing.team.color }}
                    />
                    <span className="text-lg">{standing.driver.country}</span>
                    <div className="flex flex-col">
                      <span className="font-medium">{standing.driver.name}</span>
                      <span className="text-sm text-muted-foreground">{standing.team.name}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {standing.points}
                </TableCell>
                <TableCell className="text-right">
                  {standing.wins}
                </TableCell>
                <TableCell className="text-right">
                  {standing.podiums}
                </TableCell>
              </TableRow>
            ))}
                     </TableBody>
         </Table>
        </div>
       </div>
     </div>
   );
 } 