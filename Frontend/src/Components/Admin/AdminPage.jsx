import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminDash from "./AdminDash";
import AdminTour from "./AdminTour";
import AdminBooking from "./AdminBooking";
import AdminUsers from "./AdminUsers";
import AdminChat from "./AdminChat";
import AdminInquiry from "./AdminInquiry";

const { Header, Content, Sider } = Layout;

const AdminPage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");
  const [breadcrumbText, setBreadcrumbText] = useState("Admin Dashboard");

  const handleMenuClick = (key) => {
    setSelectedMenuItem(key);
    setBreadcrumbText(`Admin / ${key}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminHeader />
      <Sider width={200} theme="dark" style={{ marginTop: "100px" }}>
        <Menu
          mode="vertical"
          selectedKeys={[selectedMenuItem]}
          style={{ height: "100%", borderRight: 0 }}
          onClick={({ key }) => handleMenuClick(key)}
        >
          <Menu.Item key="dashboard" icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="tours" icon={<LaptopOutlined />}>
            Tours
          </Menu.Item>
          <Menu.Item key="bookings" icon={<LaptopOutlined />}>
            Bookings
          </Menu.Item>
          <Menu.Item key="users" icon={<NotificationOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="chats" icon={<NotificationOutlined />}>
            ChatRoom
          </Menu.Item>
          <Menu.Item key="inquiry" icon={<NotificationOutlined />}>
            Inquiry
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "16px", height:'100%' }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbText.split(" / ").map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 400,
              height:'90%'
            }}
          >
            {/* Render content based on the selectedMenuItem */}
            {selectedMenuItem === "dashboard" && (
              <AdminDash/>
            )}
            {selectedMenuItem === "tours" && (
              <AdminTour/>
            )}
            {selectedMenuItem === "bookings" && (
              <AdminBooking/>
            )}
            {selectedMenuItem === "users" && (
              <AdminUsers/>
            )}
            {selectedMenuItem === "chats" && (
              <AdminChat/>
            )}
            {selectedMenuItem === "inquiry" && (
              <AdminInquiry/>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
