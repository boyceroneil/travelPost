package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.sql.Blob;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="picture")
    private String picture;

    @Column(name="date")
    @Temporal(TemporalType.DATE)
    @JsonFormat( pattern="yyyy-MM-dd")
    private Date date;

    @Column(name="description")
    private String description;

    @Column(name="points")
    private int points;

//    ByteArrayInputStream pic = new ByteArrayInputStream(picture);

//    @OneToMany(mappedBy = "blog", fetch=FetchType.LAZY,
//            cascade = CascadeType.ALL)
//    private Set<Comment> comment;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name= "user_id", nullable=false)
//    private User user;

//    File file = new File(getPicture());

    public Blog(int id, String name, String picture, Date date, String description, int points) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.date = date;
        this.description = description;
        this.points = points;
    }

    public Blog() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", picture='" + picture + '\'' +
                ", date=" + date +
                ", description='" + description + '\'' +
                ", points=" + points +
                '}';
    }
}
