package com.example.oblig3webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.beans.BeanProperty;
import java.util.List;

@Repository
public class BilletRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagre(Billet billet){
        String sql ="INSERT INTO Billet (film,antall,fornavn,etternavn,telefonnr,epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,billet.getFilm(),billet.getAntall(),billet.getFornavn(),billet.getEtternavn(),
                billet.getTelefonnr(),billet.getEpost());
    }

    public List<Billet> hentAlle() {
        String sql = "SELECT * FROM Billet";
        return db.query(sql, new BeanPropertyRowMapper(Billet.class));
    }

    public void slettAlle() {
        String sql = "DELETE FROM Billet";
        db.update(sql);
    }
}
