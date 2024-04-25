import TournamentGenerator from '../src/tournamentGenerator.js';
import { expect } from 'chai';

describe('TournamentGenerator', () => {
    it('devrait retourner le nombre total de joueurs dans toutes les équipes', () => {
      const equipes = [
        { nom: 'Équipe 1', joueurs: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
        { nom: 'Équipe 2', joueurs: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
      ];
      const generateurTournoi = new TournamentGenerator(equipes);
      const nombreTotalJoueurs = generateurTournoi.getNombreTotalJoueurs();
      expect(nombreTotalJoueurs).to.equal(6); 
    });
  });


  describe('TournamentGenerator', () => {
    it('devrait retourner le nombre total de joueurs dans toutes les équipes avec plus d\'équipes', () => {
      const equipes = [
        { nom: 'Équipe 1', joueurs: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
        { nom: 'Équipe 2', joueurs: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
        { nom: 'Équipe 3', joueurs: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
      ];
      const generateurTournoi = new TournamentGenerator(equipes);
      const nombreTotalJoueurs = generateurTournoi.getNombreTotalJoueurs();
      expect(nombreTotalJoueurs).to.equal(9); 
    });
  });


  
describe('TournamentGenerator', () => {
    it('devrait retourner 0 si aucune équipe n\'est fournie', () => {
      const generateurTournoi = new TournamentGenerator([]);
      const nombreTotalJoueurs = generateurTournoi.getNombreTotalJoueurs();
      expect(nombreTotalJoueurs).to.equal(0); 
    });
  });

describe('generateTournament génère le bon nombre de phases finales', () => {
  it('devrait générer le nombre correct de phases finales', () => {
    const equipes = [
      { nom: 'Équipe 1', joueurs: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
      { nom: 'Équipe 2', joueurs: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
      
    ];
    const generateurTournoi = new TournamentGenerator(equipes);
    generateurTournoi.generateTournament();
    expect(generateurTournoi.finalStages.length).to.be.above(0); 
  });
});

describe('simulatePoulesMatches qualifie correctement les équipes pour les phases finales', () => {
  it('devrait qualifier correctement les équipes pour les phases finales', () => {
    const equipes = [
      { nom: 'Équipe 1', joueurs: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
      { nom: 'Équipe 2', joueurs: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
    ];
    const generateurTournoi = new TournamentGenerator(equipes);
    generateurTournoi.generatePoules();
    generateurTournoi.simulatePoulesMatches();
    const equipesQualifiees = generateurTournoi.finalStages[0];
    expect(equipesQualifiees.length).to.be.above(0); 
  });
});

describe('generateFinalStages génère le bon nombre de phases finales', () => {
  it('devrait générer le nombre correct de phases finales', () => {
    const equipes = [
      { nom: 'Équipe 1', joueurs: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
      { nom: 'Équipe 2', joueurs: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
    ];
    const generateurTournoi = new TournamentGenerator(equipes);
    generateurTournoi.generatePoules();
    generateurTournoi.simulatePoulesMatches();
    generateurTournoi.generateFinalStages();
    expect(generateurTournoi.finalStages.length).to.be.above(0); 
  });
});
