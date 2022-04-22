package com.example.oblig3webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BilletController {

    @Autowired
    BilletRepository rep;

    @PostMapping("/lagre")
    public void lagreBilleter(Billet nyBillet){
        rep.lagreBillet(nyBillet); }

    @GetMapping("/hentAlle")
    public List<Billet> hentAlle(){
        return rep.hentAlle(); }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }

}
