
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(11) UNSIGNED NOT NULL,
  `post_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_time` int(10) UNSIGNED DEFAULT NULL,
  `update_time` int(10) UNSIGNED DEFAULT NULL,
  `delete_time` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post_name`, `post_code`, `create_time`, `update_time`, `delete_time`) VALUES
(1, '圆通速递', 'yuantong', 0, NULL, NULL),
(2, '韵达快递', 'yunda', 0, NULL, NULL),
(3, '中通快递', 'zhongtong', 0, NULL, NULL),
(4, '邮政快递包裹', 'youzhengguonei', 0, NULL, NULL),
(5, '顺丰速运', 'shunfeng', 0, NULL, NULL),
(6, '百世快递', 'huitongkuaidi', 0, NULL, NULL),
(7, '申通快递', 'shentong', 0, NULL, NULL),
(8, '京东物流', 'jd', 0, NULL, NULL),
(9, 'EMS', 'ems', 0, NULL, NULL),
(10, '天天快递', 'tiantian', 0, NULL, NULL),
(11, '极兔速递', 'jtexpress', 0, NULL, NULL),
(12, '邮政标准快递', 'youzhengbk', 0, NULL, NULL),
(13, '德邦', 'debangwuliu', 0, NULL, NULL),
(14, '德邦快递', 'debangkuaidi', 0, NULL, NULL),
(15, '宅急送', 'zhaijisong', 0, NULL, NULL),
(16, '众邮快递', 'zhongyouex', 0, NULL, NULL),
(17, '优速快递', 'youshuwuliu', 0, NULL, NULL),
(18, '百世快运', 'baishiwuliu', 0, NULL, NULL),
(19, '圆通快运', 'yuantongkuaiyun', 0, NULL, NULL),
(20, '韵达快运', 'yundakuaiyun', 0, NULL, NULL),
(21, 'wedepot物流', 'wedepot', 0, NULL, NULL),
(22, '安能快运', 'annengwuliu', 0, NULL, NULL),
(23, '中通快运', 'zhongtongkuaiyun', 0, NULL, NULL),
(24, '特急送', 'lntjs', 0, NULL, NULL),
(25, '苏宁物流', 'suning', 0, NULL, NULL),
(26, '招金精炼', 'zhaojin', 0, NULL, NULL),
(27, 'D速快递', 'dsukuaidi', 0, NULL, NULL),
(28, '安得物流', 'annto', 0, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=29;
COMMIT;
