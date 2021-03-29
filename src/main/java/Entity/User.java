package Entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="password")
    private String password;

    @OneToMany(mappedBy = "user", fetch=FetchType.LAZY,
                cascade = CascadeType.ALL)
    private Set<Comment> comment;

    @OneToMany(mappedBy = "user", fetch=FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Blog> blog;

    public User(int id, String name, String password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    public User() {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", comment=" + comment +
                '}';
    }
}
