package com.example.oblig3webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

public class BilletController {

    @Autowired
    private BilletRepository rep;

    @PostMapping("/lagre")
    public void lagreBillet(Billet nyBillet){
        rep.lagre(nyBillet); }

    @GetMapping("/hentAlle")
    public List<Billet> hentAlle(){
        return rep.hentAlle(); }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }

}
