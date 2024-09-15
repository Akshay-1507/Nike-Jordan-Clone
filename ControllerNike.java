package com.example.nikee.controller;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.nikee.model.RequestNike;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/sign")
@CrossOrigin(origins="http://127.0.0.1:5501")
public class ControllerNike {
    @Autowired
    com.example.nikee.repository.RepositoryNike RepositoryNike;
    @PostMapping("/signup")
    public void contact(@RequestBody RequestNike RequestNike) {
        System.out.println(RequestNike.getEmail());
        RepositoryNike.save(RequestNike);

    }
}