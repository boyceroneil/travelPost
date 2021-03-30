package com.example.demo.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name="comment")
    private String comment;

    @Column(name ="user")
    private String user;

    @Column(name="date")
    private Date date;

//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name= "blog_id", nullable=false)
//    private Blog blog;
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name= "user_id", nullable=false)
//    private User user1;

    public Comment(int id, String comment, String user, Date date) {
        this.id = id;
        this.comment = comment;
        this.user = user;
        this.date = date;
    }

    public Comment() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", comment='" + comment + '\'' +
                ", user='" + user + '\'' +
                ", date=" + date +
                '}';
    }
}
